export function scrollToId(id: string, offset = 72) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Height of fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
