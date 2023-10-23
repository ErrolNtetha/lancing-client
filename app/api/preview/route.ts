import type { NextRequest } from 'next/server';
import { cloudinary } from '../utils/cloudinary';

export async function POST(
    req: NextRequest,
) {
    const res = await req.json();
    const { avatar }: any = res;

    let avatarId: any;
    await cloudinary.uploader.upload(avatar, {
        upload_preset: 'user_avatar'
    })
        .then((response: any) => avatarId = response.secure_url)
    // @ts-ignore
        .catch((error: any) => Response.json({ error: error.messsage }, { status: 500 }));
    // @ts-ignore
    return Response.json({ response: avatarId }, { status: 200 })
}
