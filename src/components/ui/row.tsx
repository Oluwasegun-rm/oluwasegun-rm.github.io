import type { ReactNode } from "react";

type RowProps = {
  year?: string;
  children: ReactNode;
};

export function Row({ year, children }: RowProps) {
  return (
    <div className="row">
      <span className="row__year">{year}</span>
      <div className="row__body">{children}</div>
    </div>
  );
}
