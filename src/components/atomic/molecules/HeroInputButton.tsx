import Button from "@/atomic/atoms/Button";
import Input from "@/atomic/atoms/Input";
import HeroImage from "@/atomic/atoms/HeroImage";

import { useState } from "react";

interface HeroInputButtonProps {
  onClick: (inputValue: string) => void;
  isLoading: boolean;
  isError: boolean;
}
export default function HeroInputButton({
  onClick,
  isLoading,
  isError,
}: HeroInputButtonProps) {
  const [input, setInput] = useState("");
  return (
    <div className="flex-1 flex justify-center flex-col">
      <HeroImage />
      <Input
        onChange={(e) => setInput(e.currentTarget.value)}
        isError={isError}
      />
      <Button onClick={() => onClick(input)} isLoading={isLoading} />
    </div>
  );
}
