import { NextResponse } from "next/server";
import { prismaClient } from "@/src/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { full_url } = body;

  let randomShortUrl = new Date().getTime().toString();

  let alreadyExistThisShortUrl = await prismaClient.url.findFirst({
    where: {
      short_url: randomShortUrl,
    },
  });

  while (alreadyExistThisShortUrl) {
    randomShortUrl = new Date().getDate().toString();
    alreadyExistThisShortUrl = await prismaClient.url.findFirst({
      where: {
        short_url: randomShortUrl,
      },
    });
  }

  await prismaClient.url.create({
    data: {
      full_url,
      short_url: randomShortUrl,
    },
  });

  return NextResponse.json({
    success: true,
    short_url: randomShortUrl,
  });
}
