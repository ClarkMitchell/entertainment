import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Headline({ children }: Props) {
  return <h1>{children}</h1>;
}
