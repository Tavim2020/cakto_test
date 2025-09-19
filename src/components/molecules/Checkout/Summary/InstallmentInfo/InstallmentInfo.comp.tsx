import { IInstallmentInfo } from ".";

export const InstallmentInfo = ({ label }: IInstallmentInfo) => {
  return (
    <p className="text-sm text-center text-muted-foreground bg-muted/30 p-2 rounded">
      <span className="font-semibold">{label}</span> com taxa
    </p>
  );
};
