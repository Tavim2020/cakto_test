import { CardTitle as ShadCnCardTitle } from "@/lib/ui/card";
import { ICardTitle } from ".";

export const CardTitle = ({ children, title }: ICardTitle) => {
  return (
    <ShadCnCardTitle className="text-balance flex items-center gap-2">
      {children}

      <p>{title}</p>
    </ShadCnCardTitle>
  );
};
