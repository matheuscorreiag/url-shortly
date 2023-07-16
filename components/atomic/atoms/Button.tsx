import Spinner from "./Spinner";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}
export default function Button({ isLoading, ...rest }: ButtonProps) {
  return (
    <button
      className="
      flex
      items-center
      justify-center
      bg-indigo-600 
      rounded-lg 
      p-4 
      w-full 
      mt-3 
      max-w-[400px] 
      hover:opacity-80 
      transition-all 
      ease-in-out 
      duration-300 
      disabled:opacity-50
      disabled:hover:opacity-100
      "
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Spinner /> : "Compress it!"}
    </button>
  );
}
