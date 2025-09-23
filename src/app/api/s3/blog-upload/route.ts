import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuid } from 'uuid';

const s3 = new S3Client({ region: process.env.AWS_REGION });

export async function POST(req: NextRequest) {
  try {
    const { filename, contentType } = await req.json();
    
    if (!filename || !contentType) {
      return NextResponse.json({ error: 'Missing file details' }, { status: 400 });
    }

    // Clean filename to avoid issues with spaces and special characters
    const cleanFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = `blog/${uuid()}-${cleanFilename}`;
    
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      ContentType: contentType,
      ACL: 'public-read', // Make blog images publicly accessible
    });

    const url = await getSignedUrl(s3, command, { 
      expiresIn: 300 // 5 minutes
    });

    return NextResponse.json({ url, key });
  } catch (error) {
    console.error('Error generating blog upload URL:', error);
    return NextResponse.json({ error: 'Failed to generate upload URL' }, { status: 500 });
  }
}
