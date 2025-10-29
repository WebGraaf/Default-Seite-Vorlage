"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type StapelBild = {
  /** Vollständige Bild-URL (z. B. Unsplash) */
  src: string;
  /** Alt-Text für SEO/Accessibility */
  alt: string;
};

export interface BilderGallerieStapelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Liste der Bilder, die als Stapel/Carousel angezeigt werden */
  images: StapelBild[];
  /** Autoplay aktivieren (default: false) */
  autoplay?: boolean;
  /** Autoplay-Intervall in ms (default: 5000) */
  intervalMs?: number;
  /** Abgerundete Eckenstufe (Tailwind-Klasse), z. B. "rounded-3xl" */
  radiusClassName?: string;
}

export default function BilderGallerieStapel({
  images,
  autoplay = false,
  intervalMs = 5000,
  radiusClassName = "rounded-3xl",
  className,
  ...rest
}: BilderGallerieStapelProps) {
  const [active, setActive] = React.useState(0);

  const handleNext = React.useCallback(() => {
    setActive((p) => (images.length ? (p + 1) % images.length : 0));
  }, [images.length]);

  const handlePrev = React.useCallback(() => {
    setActive((p) => (images.length ? (p - 1 + images.length) % images.length : 0));
  }, [images.length]);

  React.useEffect(() => {
    if (!autoplay || images.length <= 1) return;
    const id = setInterval(handleNext, intervalMs);
    return () => clearInterval(id);
  }, [autoplay, intervalMs, handleNext, images.length]);

  // kleine Zufallsrotation für Tiefenwirkung bei inaktiven Karten
  const randRot = React.useCallback(() => Math.floor(Math.random() * 11) - 5, []);

  if (!images?.length) {
    return (
      <div
        className={cn(
          "w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-10",
          className
        )}
        {...rest}
      >
        <div className="border border-dashed rounded-xl p-6 text-center text-text-muted">
          Keine Bilder übergeben. Bitte prop <code>images</code> füllen.
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-10",
        className
      )}
      {...rest}
    >
      <div className="flex flex-col items-center">
        {/* Bild-Stapel / Bühne */}
        <div className="relative w-80 h-80">
          <AnimatePresence>
            {images.map((img, idx) => {
              const isActive = idx === active;
              return (
                <motion.div
                  key={img.src}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    z: -100,
                    rotate: randRot(),
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.75,
                    scale: isActive ? 1 : 0.97,
                    z: isActive ? 0 : -100,
                    rotate: isActive ? 0 : randRot(),
                    zIndex: isActive ? 50 : images.length + 2 - idx,
                    y: isActive ? [0, -60, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    z: 120,
                    rotate: randRot(),
                  }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x > swipeThreshold) {
                      handlePrev();
                    } else if (info.offset.x < -swipeThreshold) {
                      handleNext();
                    }
                  }}
                  className="absolute inset-0 origin-bottom md:pointer-events-none"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={cn("w-full h-full object-cover object-center", radiusClassName)}
                    draggable={false}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Steuerung & kleine Vorschau/Infos */}
        <div className="flex flex-col items-center py-4">
          <div className="text-center">
            <div className="text-sm text-text-muted mb-2">Bild {active + 1} / {images.length}</div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              aria-label="Vorheriges Bild"
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center group"
            >
              <ChevronLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover:-rotate-12" />
            </button>
            <button
              type="button"
              aria-label="Nächstes Bild"
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center group"
            >
              <ChevronRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}