import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 96) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) return;

    const handler = () => {
      const scrollY = window.scrollY + offset;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        if (top <= scrollY) current = id;
      }
      setActiveId(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return activeId;
}
