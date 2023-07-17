"use client";

import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import Spinner from "@/atomic/atoms/Spinner";
import { redirectToFullUrl } from "../../src/services/URLService";

export default function Page() {
  const pathName = usePathname();

  const { isFetching, isError } = useQuery(["get_url"], {
    queryFn: () => redirectToFullUrl(pathName),
  });

  return (
    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
      {isFetching && <Spinner />}
      {isError && (
        <label className="text-white">
          An error has occurred, please try again!
        </label>
      )}
    </div>
  );
}
