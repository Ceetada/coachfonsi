"use client";

import { useEffect } from "react";

export function ScrollEntrances() {
  useEffect(() => {
    const content = document.getElementById("main-content");
    if (!content || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const completed = new WeakSet<Element>();
    const targets = content.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      if (preference.matches) return;

      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting || !(target instanceof HTMLElement)) continue;
        completed.add(target);
        observer.unobserve(target);
        target.dataset.motionEntered = "";
      }
    }, { rootMargin: "0px 0px -10% 0px" });

    function syncPreference() {
      observer.disconnect();
      if (preference.matches) return;

      for (const target of targets) {
        if (!completed.has(target)) observer.observe(target);
      }
    }

    function finish(event: Event) {
      if (event.target instanceof HTMLElement) delete event.target.dataset.motionEntered;
    }

    syncPreference();
    preference.addEventListener("change", syncPreference);
    content.addEventListener("animationend", finish);
    content.addEventListener("animationcancel", finish);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncPreference);
      content.removeEventListener("animationend", finish);
      content.removeEventListener("animationcancel", finish);
    };
  }, []);

  return null;
}
