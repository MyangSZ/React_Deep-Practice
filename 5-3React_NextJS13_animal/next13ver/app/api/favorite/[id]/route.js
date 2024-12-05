import { favorites } from "@/assets/data/data";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const animalId = Number(res.params.id);
  // 찜목록 추가
  favorites.push(animalId);
  return NextResponse.json({ id: animalId });
}
export async function DELETE(req, res) {
  const animalId = Number(res.params.id);
  // 찜목록 삭제
  const idx = favorites.indexOf({ animalId });
  favorites.splice(idx, 1);
  return NextResponse.json({ id: animalId });
}
