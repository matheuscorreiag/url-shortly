import { url } from "@/src/config/url";
import CopyButton from "@/atomic/atoms/CopyButton";

interface ResultProps {
  onClick: (short_url: string) => void;
  short_url: string;
}

export default function Result({ onClick, short_url }: ResultProps) {
  return (
    <div className="flex-1 flex flex-row items-center space-x-4">
      <label className="text-2xl text-center line-clamp-1">
        Click here to copy again!
      </label>
      <CopyButton onClick={() => onClick(`${url}/${short_url}`)} />
    </div>
  );
}
