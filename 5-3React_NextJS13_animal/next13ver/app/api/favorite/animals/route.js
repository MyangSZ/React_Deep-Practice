import { data, favorites } from "@/assets/data/data";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  // 찜한 목록 데이터만 불러오도록
  const favoriteAnimals = data.filter((animal) =>
    favorites.includes(animal.id)
  );
  return NextResponse.json(favoriteAnimals);
}
