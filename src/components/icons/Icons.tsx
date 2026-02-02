type Props = {
  name:
    | "floor"
    | "paint"
    | "shield"
    | "sparkle"
    | "window"
    | "tool"
    | "check"
    | "phone"
    | "mail"
    | "pin"
    | "menu"
    | "close";
  className?: string;
  title?: string;
};

export function Icon({ name, className, title }: Props) {
  const common = {
    className: className ?? "icon",
    role: "img",
    "aria-label": title ?? name,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "check":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.08a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16v16H4z" opacity="0" />
          <path d="M4 6h16v12H4z" />
          <path d="M4 6l8 7 8-7" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" />
          <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );
    case "close":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      );

    // service icons (simple glyphs)
    case "floor":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 20h16" />
          <path d="M6 18V4h12v14" />
          <path d="M9 8h6M9 12h6" />
        </svg>
      );
    case "paint":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 20h8" />
          <path d="M6 16l8-8 2 2-8 8H6v-2z" />
          <path d="M14 8l2-2 2 2-2 2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l1.2 4.2L17.5 7.5l-4.3 1.3L12 13l-1.2-4.2L6.5 7.5l4.3-1.3L12 2z" />
          <path d="M19 12l.7 2.3L22 15l-2.3.7L19 18l-.7-2.3L16 15l2.3-.7L19 12z" />
        </svg>
      );
    case "window":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16v16H4z" />
          <path d="M4 10h16M10 4v16" />
        </svg>
      );
    case "tool":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 7l3 3-9 9H5v-3l9-9z" />
          <path d="M16 5l3 3" />
        </svg>
      );
    default:
      return null;
  }
}

export const Icons = {
  menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  chevronDown: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
};
