"use client";

import { useEffect } from "react";

declare global { interface Window { adsbygoogle: unknown[] } }

export function AdSlot({ slot, format = "auto" }: { slot?: string; format?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const resolvedSlot = slot ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT_CONTENT;

  useEffect(() => {
    if (!client || !resolvedSlot) return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch { /* AdSense se reintenta al navegar. */ }
  }, [client, resolvedSlot]);

  if (!client || !resolvedSlot) return null;

  return (
    <aside className="ad-slot" aria-label="Publicidad">
      <div style={{ width: "100%" }}>
        <span className="ad-slot-label">Publicidad</span>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={client}
          data-ad-slot={resolvedSlot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
