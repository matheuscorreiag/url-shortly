import { isError } from "@tanstack/react-query";
import { Ref, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError: boolean;
}
export const Input = ({ isError, ...rest }: InputProps) => {
  return (
    <input
      className={twMerge(
        "w-full rounded-lg h-12 px-2 max-w-[400px] outline-none focus:ring focus:ring-indigo-700 focus:ring-offset-1 focus:ring-offset-zinc-900 focus:bg-zinc-800 transition-all duration-300 ease-in-out",
        isError && "ring-red-400 ring-4"
      )}
      placeholder="Insert here your url to be short.ly!"
      {...rest}
    />
  );
};
