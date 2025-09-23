import { NextRequest, NextResponse } from 'next/server';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({ region: process.env.AWS_REGION });

export async function POST(req: NextRequest) {
  try {
    const { key } = await req.json();
    
    if (!key) {
      return NextResponse.json({ error: 'Missing image key' }, { status: 400 });
    }

    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
    });

    // Generate presigned URL for viewing (valid for 1 hour)
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

    return NextResponse.json({ url });
  } catch (error) {
    console.error('Error generating blog image URL:', error);
    return NextResponse.json({ error: 'Failed to generate image URL' }, { status: 500 });
  }
}
