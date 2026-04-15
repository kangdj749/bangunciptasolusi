import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { getSheetsClient } from "@/lib/google-sheet-client";

export const runtime = "nodejs";

const RANGE = "kacamata!A:G";

type RegistrationBody = {
  fullName: string;
  phone: string;
  age: string;
  address: string;
  studentCardUrl: string;

};

export async function POST(req: Request) {
  try {
    const body: RegistrationBody = await req.json();

    const {
      fullName,
      phone,
      age,
      address,
      studentCardUrl,
      
    } = body;

    if (!fullName)
      return NextResponse.json({ error: "Nama wajib diisi" }, { status: 400 });

    if (!phone)
      return NextResponse.json(
        { error: "Nomor telepon wajib diisi" },
        { status: 400 }
      );

    if (!age)
      return NextResponse.json({ error: "Nama wajib diisi" }, { status: 400 });


    if (!address)
      return NextResponse.json({ error: "Nama wajib diisi" }, { status: 400 });

    if (!studentCardUrl)
      return NextResponse.json({ error: "KTP wajib upload" }, { status: 400 });
  
    const id = nanoid(10);
    const createdAt = new Date().toISOString();

    const row: (string | number)[] = [
      id,
      createdAt,
      fullName,
      phone ?? "",
      age ?? "",
      address ?? "",  
      studentCardUrl ?? "",
      "pending",
    ];

    const sheets = getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID_LP!,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("REGISTRATION ERROR:", error);
    return NextResponse.json(
      { error: "Gagal simpan pendaftaran" },
      { status: 500 }
    );
  }
}