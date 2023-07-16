import { Ref, useRef } from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {}
export const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      className="w-full rounded-lg h-12 px-2 max-w-[400px] outline-none focus:ring focus:ring-indigo-700 focus:ring-offset-1 focus:ring-offset-zinc-900 focus:bg-zinc-800 transition-all duration-300 ease-in-out"
      placeholder="Insert here your url to be short.ly!"
      {...rest}
    />
  );
};
