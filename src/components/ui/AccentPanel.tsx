import type { ReactNode } from "react";

type Accent = "purple" | "orange" | "turquoise" | "blue";

interface AccentPanelProps {
  accent?: Accent;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
}

export default function AccentPanel({
  accent: _accent = "purple",
  children,
  className = "",
  variant = "default",
}: AccentPanelProps) {
  const bg = variant === "muted" ? "bg-zemin-light" : "bg-white";

  return <div className={`z-panel ${bg} ${className}`}>{children}</div>;
}
