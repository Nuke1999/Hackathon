import { ReactNode } from "react";

interface HighlightBoxProps {
  children: ReactNode;
  className?: string;
}

export default function HighlightBox({
  children,
  className = "",
}: HighlightBoxProps) {
  return (
    <div
      className={`bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 rounded-r ${className}`}
    >
      <div className="prose dark:prose-invert max-w-none">{children}</div>
    </div>
  );
}
