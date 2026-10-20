"use client";

import { useEffect, useRef, useState } from "react";

type Props = { tags: string[]; className?: string };

/**
 * Begriffe, die beim Erreichen der Sektion herunterfallen und sich mit der Maus ziehen lassen.
 * Technik: Matter.js berechnet die Physik, gerendert werden echte DOM-Elemente
 * (scharfe Schrift, markierbar, für Screenreader als Liste lesbar).
 *
 * Fallback (kein JS, reduzierte Bewegung): ruhige, umbrechende Liste.
 * Auf Touch-Geräten fallen die Begriffe, sind aber nicht ziehbar – Scrollen bleibt frei.
 */
export function PhysicsTags({ tags, className = "" }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let started = false;

    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        const Matter = (await import("matter-js")).default;
        setActive(true);
        cleanup = run(Matter, box, tagRefs.current.filter(Boolean) as HTMLLIElement[]);
      },
      { threshold: 0.35 },
    );
    io.observe(box);
    return () => {
      io.disconnect();
      cleanup?.();
    };
  }, []);

  return (
    <div ref={boxRef} className={`physics ${active ? "is-active" : ""} ${className}`}>
      <ul className="physics__list">
        {tags.map((tag, i) => (
          <li key={tag} ref={(el) => { tagRefs.current[i] = el; }} className={`physics__tag ${i % 4 === 0 ? "physics__tag--accent" : ""}`}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

function run(Matter: typeof import("matter-js"), box: HTMLDivElement, els: HTMLLIElement[]) {
  const { Engine, Runner, Bodies, Body, Composite, Mouse, MouseConstraint, Events } = Matter;
  const W = box.clientWidth;
  const H = box.clientHeight;
  const engine = Engine.create({ gravity: { x: 0, y: 1 } });
  const wall = 200;

  Composite.add(engine.world, [
    Bodies.rectangle(W / 2, H + wall / 2, W * 2, wall, { isStatic: true }),
    Bodies.rectangle(-wall / 2, H / 2, wall, H * 4, { isStatic: true }),
    Bodies.rectangle(W + wall / 2, H / 2, wall, H * 4, { isStatic: true }),
  ]);

  const bodies = els.map((el, i) => {
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const x = Math.min(W - w / 2, Math.max(w / 2, Math.random() * W));
    const y = -h - i * (h * 0.9) - Math.random() * 120;
    const body = Bodies.rectangle(x, y, w, h, {
      chamfer: { radius: h / 2 },
      restitution: 0.35,
      friction: 0.3,
      frictionAir: 0.012,
      angle: (Math.random() - 0.5) * 0.6,
    });
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
    return { el, body, w, h };
  });
  Composite.add(engine.world, bodies.map((b) => b.body));

  // Ziehen nur mit feiner Zeigersteuerung (Maus/Trackpad)
  let mc: Matter.MouseConstraint | undefined;
  if (window.matchMedia("(pointer: fine)").matches) {
    const mouse = Mouse.create(box);
    // Mausrad nicht abfangen, damit die Seite weiter scrollt
    const m = mouse as unknown as { mousewheel: EventListener; element: HTMLElement };
    m.element.removeEventListener("wheel", m.mousewheel);
    m.element.removeEventListener("mousewheel", m.mousewheel);
    m.element.removeEventListener("DOMMouseScroll", m.mousewheel);
    mc = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, render: { visible: false } } });
    Composite.add(engine.world, mc);
    Events.on(mc, "startdrag", () => box.classList.add("is-dragging"));
    Events.on(mc, "enddrag", () => box.classList.remove("is-dragging"));
  }

  const runner = Runner.create();
  Runner.run(runner, engine);

  let frame = 0;
  const draw = () => {
    for (const { el, body, w, h } of bodies) {
      el.style.transform = `translate(${body.position.x - w / 2}px, ${body.position.y - h / 2}px) rotate(${body.angle}rad)`;
    }
    frame = requestAnimationFrame(draw);
  };
  draw();

  return () => {
    cancelAnimationFrame(frame);
    Runner.stop(runner);
    if (mc) Composite.remove(engine.world, mc);
    Engine.clear(engine);
  };
}
