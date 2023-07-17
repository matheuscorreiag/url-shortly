"use client";
import HeroInputButton from "../molecules/HeroInputButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CheckCircle, X } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import Title from "../atoms/Title";
import colors from "tailwindcss/colors";
import Result from "../molecules/Result";
import { shortUrlSchema } from "../../../utils/shortUrlSchema";
import { url } from "../../../../config/url";

async function createShorterUrl(full_url: string) {
  const payload = {
    full_url,
  };

  const validatedPayload = shortUrlSchema.safeParse(payload);

  if (validatedPayload.success === false) {
    toast.error(validatedPayload.error.errors[0].message, {
      icon: <X fill={colors.red["600"]} weight="bold" size={24} />,
    });
    throw new Error(validatedPayload.error.issues[0].message);
  }

  return await axios.post(`${url}/api/url`, validatedPayload.data);
}
export default function HeroResult() {
  const { mutate, data, isLoading, isSuccess, isError } = useMutation({
    mutationFn: (inputValue: string) => createShorterUrl(inputValue),
  });

  function handleCopy(url: string) {
    navigator.clipboard.writeText(url);
    toast("URL copied successfully!", {
      icon: <CheckCircle fill={colors.green["600"]} weight="bold" size={24} />,
    });
  }

  function handleSubmit(inputValue: string) {
    mutate(inputValue);
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
