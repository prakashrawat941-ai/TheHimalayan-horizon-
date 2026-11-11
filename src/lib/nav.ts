export const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/destinations", key: "explore" },
  { href: "/homestays", key: "homestays" },
  { href: "/workations", key: "workations" },
  { href: "/plan", key: "plan" },
  { href: "/contact", key: "contact" },
] as const;

// The phone's bottom bar has room for five items; Contact stays in the header and footer.
export const MOBILE_NAV_ITEMS = NAV_ITEMS.filter((item) => item.key !== "contact");

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
