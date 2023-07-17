import toast from "react-hot-toast";
import axios from "axios";
import colors from "tailwindcss/colors";

import { shortUrlSchema } from "@/src/utils/shortUrlSchema";
import { X } from "@phosphor-icons/react";
import { url } from "@/src/config/url";

export async function createShorterUrl(full_url: string) {
  const payload = {
    full_url,
  };

  const validatedPayload = shortUrlSchema.safeParse(payload);

  if (validatedPayload.success === false) {
    toast.error(validatedPayload.error.errors[0].message, {
      icon: <X fill={colors.red["600"]} weight="bold" size={24} />,
    });
    throw new Error(validatedPayload.error.issues[0].message);
  }

  return await axios.post(`${url}/api/url`, validatedPayload.data);
}

export async function redirectToFullUrl(short_url: string) {
  const response = await axios.get(`${url}/api/url/${short_url}`);
  const full_url: string = response.data.full_url;

  console.log("full_url: ", full_url);
  if (full_url.startsWith("www.")) {
    window.location.href = "https://" + full_url;
  } else {
    window.location.href = full_url;
  }
}
