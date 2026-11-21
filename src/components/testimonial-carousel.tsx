"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Testimonial } from "@/content/testimonials";
import { MediaFrame } from "./media-frame";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const programmaticScroll = useRef(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState<Testimonial | null>(null);

  useEffect(() => () => {
    if (scrollTimer.current !== null) clearTimeout(scrollTimer.current);
  }, []);

  function select(index: number) {
    const slide = track.current?.children.item(index);
    if (!(slide instanceof HTMLElement) || !track.current) return;

    const rail = track.current;
    const offset = slide.getBoundingClientRect().left - rail.getBoundingClientRect().left;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    programmaticScroll.current = true;
    rail.scrollTo({
      left: rail.scrollLeft + offset - (rail.clientWidth - slide.offsetWidth) / 2,
      behavior: reducedMotion ? "instant" : "smooth",
    });
    setActive(index);
  }

  function syncActive() {
    const rail = track.current;
    if (!rail || programmaticScroll.current) return;
    if (rail.scrollLeft <= 1) {
      setActive(0);
      return;
    }
    if (rail.scrollWidth - rail.clientWidth - rail.scrollLeft <= 1) {
      setActive(items.length - 1);
      return;
    }
    const center = rail.getBoundingClientRect().left + rail.clientWidth / 2;
    let closest = Infinity;
    let nearest = 0;

    Array.from(rail.children).forEach((slide, index) => {
      const bounds = slide.getBoundingClientRect();
      const distance = Math.abs(bounds.left + bounds.width / 2 - center);
      if (distance < closest) {
        closest = distance;
        nearest = index;
      }
    });
    setActive(nearest);
  }

  function onScroll() {
    if (scrollTimer.current !== null) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(syncActive, 120);
  }

  function releaseScroll() {
    programmaticScroll.current = false;
  }

  function onKeyboard(event: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = {
      ArrowLeft: Math.max(0, active - 1), ArrowRight: Math.min(items.length - 1, active + 1),
      Home: 0, End: items.length - 1,
    };
    const next = keys[event.key];
    if (next === undefined || event.altKey || event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    select(next);
  }

  if (!items.length) return null;

  return (
    <div className="testimonial-carousel" role="region" aria-roledescription="carousel" aria-label="Client testimonials" onKeyDown={onKeyboard}>
      <div className="carousel-track" ref={track} onScroll={onScroll} onPointerDown={releaseScroll} onWheel={releaseScroll} tabIndex={0} aria-label="Swipeable testimonial gallery">
        {items.map((item, index) => (
          <figure key={item.id} className="testimonial-slide" data-active={index === active} aria-label={`Testimonial ${index + 1} of ${items.length}`}>
            {item.screenshot ? (
              <button type="button" className="testimonial-trigger" aria-label={`Enlarge ${item.clientLabel ?? `testimonial ${index + 1}`}`} onClick={(event) => {
                opener.current = event.currentTarget;
                setOpened(item);
                dialog.current?.showModal();
              }}>
                <MediaFrame className="testimonial-frame" asset={{ ...item.screenshot, alt: item.description ?? item.screenshot.alt }} sizes="(max-width: 699px) 74vw, 32vw" contain />
                <span className="enlarge-icon"><Maximize2 size={18} aria-hidden="true" /></span>
              </button>
            ) : <MediaFrame className="testimonial-frame" asset={null} />}
            {item.screenshot && (item.caption || item.clientLabel || item.date) ? (
              <figcaption>{[item.caption, item.clientLabel, item.date].filter(Boolean).join(" · ")}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>
      <div className="carousel-controls">
        <div className="pagination" aria-label="Choose testimonial">
          {items.map((item, index) => (
            <button key={item.id} type="button" aria-label={`Go to testimonial ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => select(index)}><span /></button>
          ))}
        </div>
        <div className="carousel-actions">
          <button className="icon-button" type="button" aria-label="Previous testimonial" disabled={active === 0} onClick={() => select(active - 1)}><ArrowLeft aria-hidden="true" /></button>
          <button className="icon-button" type="button" aria-label="Next testimonial" disabled={active === items.length - 1} onClick={() => select(active + 1)}><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
      <span className="sr-only" role="status">Testimonial {active + 1} of {items.length}</span>
      <dialog className="lightbox" ref={dialog} aria-label="Enlarged testimonial" onKeyDown={(event) => event.stopPropagation()} onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }} onClose={() => {
        setOpened(null);
        opener.current?.focus({ preventScroll: true });
      }}>
        <div className="lightbox-content">
          <button className="icon-button lightbox-close" type="button" aria-label="Close enlarged testimonial" onClick={() => dialog.current?.close()}><X aria-hidden="true" /></button>
          {opened?.screenshot ? (
            <Image src={opened.screenshot.src} alt={opened.description ?? opened.screenshot.alt} fill sizes="(max-width: 650px) 92vw, 560px" />
          ) : null}
        </div>
      </dialog>
    </div>
  );
}
