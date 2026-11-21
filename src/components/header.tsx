"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { Brand } from "./brand";
import { ContactLink } from "./contact-link";

export function Header({ chat }: { chat: string | null }) {
  const menu = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => {
      if (breakpoint.matches) menu.current?.close();
    };
    const syncHash = () => setHash(window.location.hash);
    const animation = requestAnimationFrame(syncHash);
    breakpoint.addEventListener("change", closeOnDesktop);
    window.addEventListener("hashchange", syncHash);
    return () => {
      cancelAnimationFrame(animation);
      breakpoint.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  function openMenu() {
    menu.current?.showModal();
    setOpen(true);
  }

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} aria-current={hash === href ? "location" : undefined}>{label}</a>
          ))}
        </nav>
        <ContactLink href={chat} className="header-cta button-primary">Chat with Coach Fonsi</ContactLink>
        <button ref={toggle} type="button" className="menu-toggle icon-button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-menu" onClick={openMenu}><Menu aria-hidden="true" /></button>
      </div>
      <dialog id="mobile-menu" ref={menu} className="mobile-menu" aria-label="Navigation" onClose={() => { setOpen(false); toggle.current?.focus({ preventScroll: true }); }}>
        <div className="mobile-menu-top">
          <Brand onClick={() => menu.current?.close()} />
          <button type="button" className="icon-button" aria-label="Close navigation" onClick={() => menu.current?.close()}><X aria-hidden="true" /></button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} aria-current={hash === href ? "location" : undefined} onClick={() => {
              menu.current?.close();
              requestAnimationFrame(() => document.getElementById(href.slice(1))?.focus({ preventScroll: true }));
            }}>{label}</a>
          ))}
        </nav>
        <div className="mobile-contact">
          <ContactLink href={chat} className="button-primary" onClick={() => menu.current?.close()}>Chat with Coach Fonsi</ContactLink>
        </div>
      </dialog>
    </header>
  );
}
