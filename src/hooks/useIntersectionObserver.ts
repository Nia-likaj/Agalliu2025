import { useEffect, useMemo, useState } from "react";

type Options = IntersectionObserverInit;

export function useIntersectionObserver<T extends Element>(
  element: T | null,
  options?: Options
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const opts = useMemo<Options>(
    () => ({
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? "0px",
      threshold: options?.threshold ?? 0.2,
    }),
    [options?.root, options?.rootMargin, options?.threshold]
  );

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, opts);

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, opts]);

  return isIntersecting;
}
