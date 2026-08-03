import type { ReactNode } from "react";

interface AccentPanelProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
}

export default function AccentPanel({
  children,
  className = "",
  variant = "default",
}: AccentPanelProps) {
  const bg = variant === "muted" ? "bg-zemin-light" : "bg-white";

  return <div className={`z-panel ${bg} ${className}`}>{children}</div>;
}
