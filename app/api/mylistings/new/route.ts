import type { NextRequest } from 'next/server';
import { cloudinary } from '../../utils/cloudinary';

export async function POST(
    req: NextRequest,
) {
    const res = await req.json();
    const { cover }: any = res;

    let coverUrl: any;
    await cloudinary.uploader.upload(cover, {
        upload_preset: 'user_avatar'
    })
        .then((response: any) => coverUrl = response.secure_url)
    // @ts-ignore
        .catch((error: any) => Response.json({ error: error.messsage }, { status: 500 }));
    // @ts-ignore
    return Response.json({ response: coverUrl }, { status: 200 })
}
