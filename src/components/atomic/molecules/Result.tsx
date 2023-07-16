import CopyButton from "../atoms/CopyButton";

interface ResultProps {
  onClick: (url: string) => void;
  url: string;
}

export default function Result({ onClick, url }: ResultProps) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <label className="text-2xl">This is your short.ly URL:</label>
      <div className="flex space-x-4">
        <a href={url} className="text-2xl font-bold">
          www.short.ly.com/{url}
        </a>

        <CopyButton onClick={() => onClick(url)} />
      </div>
    </div>
  );
}
