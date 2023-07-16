import { Copy } from "@phosphor-icons/react";

interface CopyButton {
  onClick: () => void;
}
export default function CopyButton({ onClick }: CopyButton) {
  return (
    <button
      className="bg-indigo-600 p-1 rounded-lg hover:opacity-80 transition-all ease-in-out duration-200"
      onClick={onClick}
    >
      <Copy size={28} className="cursor-pointer" />
    </button>
  );
}
