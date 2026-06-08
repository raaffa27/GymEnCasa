"use client";

import { useState } from "react";

/**
 * Newsletter — UI sin backend.
 *
 * El handler simula envío con un setTimeout. Cuando conectes ConvertKit,
 * Mailchimp, Resend, etc., reemplaza el `onSubmit` por el fetch a tu endpoint
 * sin tocar la UI.
 */
export function Newsletter() {
  const [estado, setEstado] = useState<"idle" | "sending" | "ok" | "err">(
    "idle",
  );
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes("@")) {
      setEstado("err");
      return;
    }
    setEstado("sending");
    // TODO: sustituir por fetch a tu provider (ConvertKit, Resend, …)
    setTimeout(() => {
      setEstado("ok");
      setEmail("");
    }, 700);
  }

  return (
    <section
      aria-labelledby="newsletter-h"
      className="relative overflow-hidden rounded-3xl border border-bg-line bg-bg-card p-8 md:p-12"
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 size-72 rounded-full bg-flame-500/20 blur-3xl"
      />
      <div className="relative max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-3">
          Boletín · 1 email al mes
        </p>
        <h2
          id="newsletter-h"
          className="font-display text-3xl md:text-4xl text-ink leading-tight"
        >
          Comparativas nuevas, sin spam.
        </h2>
        <p className="mt-3 text-ink-mute">
          Una vez al mes, un análisis honesto de un producto que hayamos
          probado, más las mejores ofertas reales de Amazon en lo que llevamos
          de mes.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Tu correo electrónico
          </label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (estado === "err") setEstado("idle");
            }}
            required
            className="flex-1 rounded-full bg-bg border border-bg-line text-ink px-5 py-3 placeholder:text-ink-dim focus:outline-none focus:border-flame-400"
          />
          <button
            type="submit"
            disabled={estado === "sending"}
            className="rounded-full bg-flame-grad text-bg font-medium px-6 py-3 shadow-flame hover:brightness-110 disabled:opacity-60 transition"
          >
            {estado === "sending" ? "Enviando…" : "Suscribirme"}
          </button>
        </form>

        <p
          role="status"
          aria-live="polite"
          className="mt-3 text-sm min-h-[1.25rem]"
        >
          {estado === "ok" && (
            <span className="text-flame-300">
              ¡Listo! Te llegará el próximo boletín.
            </span>
          )}
          {estado === "err" && (
            <span className="text-flame-300">
              Mete un correo con @ válido.
            </span>
          )}
        </p>
      </div>
    </section>
  );
}
