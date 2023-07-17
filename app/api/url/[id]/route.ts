import { NextResponse } from "next/server";
import { prismaClient } from "@/src/lib/prisma";

interface IParams {
  id?: string;
}
export async function GET(req: Request, { params }: { params: IParams }) {
  const { id } = params;

  const existUrl = await prismaClient.url.findFirst({
    where: {
      short_url: id,
    },
  });

  if (!existUrl) {
    throw new Error("Invalid url");
  }

  return NextResponse.json({
    full_url: existUrl.full_url,
  });
}
