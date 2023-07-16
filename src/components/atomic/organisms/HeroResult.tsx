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
import Spinner from "../atoms/Spinner";

async function createShorterUrl(full_url: string) {
  return await axios.post("http://localhost:3000/api/url", {
    full_url,
  });
}
export default function HeroResult() {
  const { mutate, data, isLoading, isSuccess } = useMutation({
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
      {isLoading && <Spinner />}
      {isSuccess && (
        <Result url={data.data.short_url} onClick={(url) => handleCopy(url)} />
      )}
      {!isSuccess && !isLoading && <Title />}

      <HeroInputButton
        isLoading={isLoading}
        onClick={(inputValue) => handleSubmit(inputValue)}
      />
    </div>
  );
}
