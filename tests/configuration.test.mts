import assert from "node:assert/strict";
import test from "node:test";
import { durationLabel, generalMessage, httpsUrl, planMessage, whatsappLink } from "../src/lib/links.ts";
import { formatNaira, isPrice, promotionalPrice, savings } from "../src/lib/pricing.ts";

test("WhatsApp rejects missing and malformed numbers", () => {
  for (const value of [null, "", "080 1234 5678", "234abc5678", "234 1234?text=1234", "12"]) {
    assert.equal(whatsappLink(value), null);
  }
});

test("WhatsApp links encode the selected plan, duration, and displayed price", () => {
  // Reserved 555 number used only to exercise URL generation.
  const number = "+1 (202) 555-0142";
  const general = new URL(whatsappLink(number)!);
  assert.equal(general.origin, "https://wa.me");
  assert.equal(general.pathname, "/12025550142");
  assert.equal(general.searchParams.get("text"), generalMessage);

  for (const plan of ["Basic", "Standard"]) {
    for (const duration of [1, 3, 6] as const) {
      const price = formatNaira(24000 * duration);
      const message = planMessage(plan, duration, price);
      const link = new URL(whatsappLink(number, message)!);
      assert.equal(link.searchParams.get("text"), message);
      assert.ok(message.includes(`${plan} coaching plan for ${durationLabel(duration)} at ${price}.`));
    }
  }
  assert.equal(planMessage("Basic", 6, null), "Hello Coach Fonsi, I’m interested in the Basic coaching plan for 6 months. How do I get started?");
});

test("sale offers and savings require positive configured prices", () => {
  for (const invalid of [null, NaN, Infinity, -2, 0]) assert.equal(isPrice(invalid), false);
  assert.match(formatNaira(32000), /₦32,000/);
  assert.equal(savings(null, 24000, 3), null);
  assert.equal(savings(10000, null, 3), null);
  assert.equal(savings(10000, 31000, 3), null);
  assert.equal(savings(10000, 9000, 1), null);
  assert.equal(savings(10000, 26000, 3), 4000);
  assert.equal(promotionalPrice(null, 100), null);
  assert.equal(promotionalPrice(120, 130), null);
  assert.equal(promotionalPrice(120, 90), 90);
});

test("external destinations accept HTTPS only", () => {
  for (const value of [null, "", "/example", "http://example.com/", "javascript:alert(1)", "https://name:password@example.com/"]) {
    assert.equal(httpsUrl(value), null);
  }
  assert.equal(httpsUrl("https://example.com/guide"), "https://example.com/guide");
});
