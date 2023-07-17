import { url } from "../../../../config/url";
import CopyButton from "../atoms/CopyButton";

interface ResultProps {
  onClick: (short_url: string) => void;
  short_url: string;
}

export default function Result({ onClick, short_url }: ResultProps) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <label className="text-2xl">This is your short.ly URL:</label>
      <div className="flex space-x-4">
        <a href={short_url} className="text-2xl font-bold">
          {url}/{short_url}
        </a>

        <CopyButton onClick={() => onClick(`${url}/${short_url}`)} />
      </div>
    </div>
  );
}
