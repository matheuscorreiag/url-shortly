"use client";
import HeroInputButton from "@/atomic/molecules/HeroInputButton";
import toast from "react-hot-toast";
import Title from "@/atomic/atoms/Title";
import colors from "tailwindcss/colors";
import Result from "@/atomic/molecules/Result";

import { createShorterUrl } from "@/src/services/URLService";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle, X } from "@phosphor-icons/react";
import { url } from "@/src/config/url";

export default function HeroResult() {
  const { mutateAsync, data, isLoading, isSuccess, isError } = useMutation({
    mutationFn: (inputValue: string) => createShorterUrl(inputValue),
  });

  function handleCopy(url: string) {
    navigator.clipboard.writeText(url);
    toast("URL copied successfully!", {
      icon: <CheckCircle fill={colors.green["600"]} weight="bold" size={24} />,
    });
  }

  function handleSubmit(inputValue: string) {
    mutateAsync(inputValue).then((data) => {
      handleCopy(`${url}/${data.data.short_url}`);
    });
  }
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-around space-y-16 md:space-x-16">
      {isSuccess && (
        <Result
          short_url={data.data.short_url}
          onClick={(url) => handleCopy(url)}
        />
      )}
      {!isSuccess && <Title />}

      <HeroInputButton
        isLoading={isLoading}
        onClick={(inputValue) => handleSubmit(inputValue)}
        isError={isError}
      />
    </div>
  );
}
