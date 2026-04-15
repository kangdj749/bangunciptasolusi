import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"

export const runtime = "nodejs"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get("file")

    // 🔒 Validasi file
    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "File tidak valid" },
        { status: 400 }
      )
    }

    // 🔒 Validasi tipe file
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "File harus berupa gambar (jpg, png, webp, dll)" },
        { status: 400 }
      )
    }

    // 🔒 Validasi ukuran file
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Ukuran file maksimal 5MB" },
        { status: 400 }
      )
    }

    const buffer = Buffer.from(await file.arrayBuffer())

    const uploadResult = await new Promise<{
      secure_url: string
      public_id: string
    }>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "registrations/student-cards",
          resource_type: "image",
          transformation: [
            { width: 1200, crop: "limit" },
            { quality: "auto" },
            { fetch_format: "auto" },
          ],
        },
        (error, result) => {
          if (error) {
            reject(error)
            return
          }

          if (!result) {
            reject(new Error("Upload gagal tanpa response"))
            return
          }

          resolve({
            secure_url: result.secure_url,
            public_id: result.public_id,
          })
        }
      )

      stream.end(buffer)
    })

    return NextResponse.json({
      success: true,
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    })
    } catch (error: unknown) {
    console.error("UPLOAD ERROR:", error);

    let message = "Upload gagal";

    if (error instanceof Error) {
        message = error.message;
    }

    return NextResponse.json(
        { error: message },
        { status: 500 }
    );
}}