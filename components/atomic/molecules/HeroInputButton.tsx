import { Ref } from "react";
import Button from "../atoms/Button";
import HeroImage from "../atoms/HeroImage";
import { forwardRef } from "react";
import { Input } from "../atoms/Input";

interface HeroInputButtonProps {
  onClick: () => void;
  isLoading: boolean;
  ref: Ref<HTMLInputElement>;
}
export default function HeroInputButton({
  onClick,
  isLoading,
  ref,
}: HeroInputButtonProps) {
  return (
    <div className="flex-1 flex justify-center flex-col">
      <HeroImage />
      <Input ref={ref} />
      <Button onClick={onClick} isLoading={isLoading} />
    </div>
  );
}
