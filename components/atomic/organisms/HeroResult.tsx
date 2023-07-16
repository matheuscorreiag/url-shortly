"use client";

import { useRef } from "react";
import CopyButton from "../atoms/CopyButton";
import HeroInputButton from "../molecules/HeroInputButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CheckCircle } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import Title from "../atoms/Title";
import colors from "tailwindcss/colors";
import Result from "../molecules/Result";

async function createShorterUrl(full_url: string) {
  return await axios.post("http://localhost:3000/api/url", {
    full_url,
  });
}
export default function HeroResult() {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef);
  const { mutate, data, isLoading, isSuccess } = useMutation({
    mutationFn: () => createShorterUrl(inputRef.current?.value as string),
  });

  function handleCopy(url: string) {
    navigator.clipboard.writeText(url);
    toast("URL copied successfully!", {
      icon: <CheckCircle fill={colors.green["600"]} weight="bold" size={24} />,
    });
  }

  function handleSubmit() {
    console.log(inputRef.current?.value);

    mutate();
  }
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-around space-y-16 md:space-x-16">
      {!isSuccess && <Title />}
      {isSuccess && (
        <Result url={"dsadasdsa"} onClick={(url) => handleCopy(url)} />
      )}
      <HeroInputButton
        isLoading={isLoading}
        onClick={handleSubmit}
        ref={inputRef}
      />
    </div>
  );
}
