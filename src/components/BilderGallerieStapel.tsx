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
        <div className="border border-dashed rounded-xl p-6 text-center text-muted-foreground">
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
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        {/* Bild-Stapel / Bühne */}
        <div>
          <div className="relative h-80 w-full md:h-[28rem]">
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
                    className="absolute inset-0 origin-bottom"
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
        </div>

        {/* Steuerung & kleine Vorschau/Infos */}
        <div className="flex flex-col justify-between py-2">
          <div>
            <div className="text-sm text-muted-foreground mb-2">Bild {active + 1} / {images.length}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              BilderGallerieStapel
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mt-3">
              Ein stapelndes Galerie-Carousel mit leichter 3D-Bewegung. Übergib einfach ein Array von
              <code className="px-1">{"{ src, alt }"}</code>.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-8">
            <button
              type="button"
              aria-label="Vorheriges Bild"
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center group"
            >
              <ChevronLeft className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:-rotate-12" />
            </button>
            <button
              type="button"
              aria-label="Nächstes Bild"
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center group"
            >
              <ChevronRight className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}