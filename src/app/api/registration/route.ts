import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { getSheetsClient } from "@/lib/google-sheet-client";

export const runtime = "nodejs";

const RANGE = "client!A:H";

type RegistrationBody = {
  fullName: string;
  instansi?: string;
  jenis_proyek?: string;
  lokasi_proyek?: string;
  deskripsi_singkat?: string;
  phone?: string;
  
};

export async function POST(req: Request) {
  try {
    const body: RegistrationBody = await req.json();

    const {
      fullName,
      instansi,
      jenis_proyek,
      lokasi_proyek,
      deskripsi_singkat,
      phone,
     
    } = body;

    if (!fullName)
      return NextResponse.json({ error: "Nama wajib diisi" }, { status: 400 });

    if (!instansi)
      return NextResponse.json({ error: "Instansi wajib diisi" }, { status: 400 });

    if (!phone)
      return NextResponse.json(
        { error: "Nomor telepon wajib diisi" },
        { status: 400 }
      );

    const id = nanoid(10);
    const createdAt = new Date().toISOString();

    const row: (string | number)[] = [
      id,
      createdAt,
      fullName,
      instansi ?? "",
      jenis_proyek ?? "",
      lokasi_proyek ?? "",
      deskripsi_singkat ?? "",
      phone,
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