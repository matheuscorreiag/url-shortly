import { Ref, useState } from "react";
import Button from "../atoms/Button";
import HeroImage from "../atoms/HeroImage";
import { forwardRef } from "react";
import { Input } from "../atoms/Input";

interface HeroInputButtonProps {
  onClick: (inputValue: string) => void;
  isLoading: boolean;
}
export default function HeroInputButton({
  onClick,
  isLoading,
}: HeroInputButtonProps) {
  const [input, setInput] = useState("");
  return (
    <div className="flex-1 flex justify-center flex-col">
      <HeroImage />
      <Input onChange={(e) => setInput(e.currentTarget.value)} />
      <Button onClick={() => onClick(input)} isLoading={isLoading} />
    </div>
  );
}
