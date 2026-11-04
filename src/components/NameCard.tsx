"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import portrait from "@/assets/kenneth-portrait.jpg";
import thumb from "@/assets/kenneth-thumb.jpg";

/**
 * The name, a small portrait beside it, and the full print behind it.
 *
 * Desktop: hover or focus the thumbnail to open it.
 * Touch: tap the thumbnail; tap away or Escape to close.
 */
export function NameCard() {
  const [open, setOpen] = useState(true);
  const cardId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="name-wrap" data-open={open}>
      <p className="name-eyebrow">my name is</p>

      <div className="name-line">
        <h1 className="name-heading">
          Kenneth Ekandem<span className="name-period">.</span>
        </h1>

        <div className="name-thumb-wrap">
          <button
            type="button"
            className="name-thumb"
            aria-expanded={open}
            aria-controls={cardId}
            aria-label="Open a larger photo of Kenneth"
            onClick={() => setOpen((value) => !value)}
          >
            <Image
              src={thumb}
              alt=""
              className="name-thumb-image"
              sizes="46px"
              placeholder="blur"
              priority
            />
          </button>

          <figure id={cardId} className="name-card">
            <Image
              src={portrait}
              alt="Kenneth Ekandem"
              className="name-card-image"
              sizes="(min-width: 900px) 190px, 150px"
              placeholder="blur"
            />
            <figcaption>lagos · wat+1</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
