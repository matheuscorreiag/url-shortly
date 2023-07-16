"use client";

import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import Spinner from "../../src/components/atomic/atoms/Spinner";
import axios from "axios";

async function redirectToFullUrl(short_url: string) {
  const response = await axios.get(
    `http://localhost:3000/api/url/${short_url}`
  );

  const full_url = response.data.full_url;

  window.location.href = full_url;

  return full_url;
}

interface IParams {
  id: string;
}
export default function Page({ params }: { params: IParams }) {
  const pathName = usePathname();

  const { data, isFetching, isError } = useQuery(["get_url"], {
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
