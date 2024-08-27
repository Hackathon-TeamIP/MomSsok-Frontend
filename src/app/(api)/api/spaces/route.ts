import data from "@/shared/data/spaces";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = parseInt((searchParams.get("page") as string) || "1", 10);
  const limit = parseInt((searchParams.get("limit") as string) || "10", 10);
  const id = searchParams.get("id") as string;

  const totalCount = data.length;
  const totalPage = Math.ceil(totalCount / limit);

  if (id) {
    const item = data.find((item) => item.id === parseInt(id));
    return NextResponse.json(
      { page: 1, data: item ? [item] : [], totalCount: 1, totalPage: 1 },
      { status: 200 },
    );
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = data.slice(startIndex, endIndex);

  return NextResponse.json(
    {
      page,
      data: paginatedData,
      totalCount,
      totalPage,
    },
    { status: 200 },
  );
}
