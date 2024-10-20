import { cn } from "@/lib/utils";

type SpacingProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn(
        size === "xs" && "h-1",
        size === "sm" && "h-2",
        size === "md" && "h-4",
        size === "lg" && "h-8",
        size === "xl" && "h-16"
      )}
    ></div>
  );
};
