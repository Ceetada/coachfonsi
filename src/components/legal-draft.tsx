import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Brand } from "./brand";

export function LegalDraft({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="site-header"><div className="wrap header-inner"><Brand href="/" /></div></header>
      <main className="wrap section legal-copy">
        <Link href="/" className="text-link"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
        <h1>{title}</h1>
        <p><strong>Draft for review before launch</strong></p>
        {children}
      </main>
    </>
  );
}
