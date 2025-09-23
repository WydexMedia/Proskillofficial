'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function BlogImage({ src, alt, width, height, className }: BlogImageProps) {
  const [imageUrl, setImageUrl] = useState(src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // If it's already a presigned URL or external URL, use it directly
    if (src.includes('amazonaws.com') && src.includes('?')) {
      setImageUrl(src);
      setLoading(false);
      return;
    }

    // If it's an S3 key, get a presigned URL
    if (src.includes('blog/') && !src.includes('http')) {
      const key = src;
      fetch('/api/s3/blog-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.url) {
            setImageUrl(data.url);
          } else {
            setError(true);
          }
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    } else {
      setImageUrl(src);
      setLoading(false);
    }
  }, [src]);

  if (loading) {
    return (
      <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
        <span className="text-gray-500">Loading image...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-500">Image unavailable</span>
      </div>
    );
  }

  return (
    <Image 
      src={imageUrl} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
      onError={() => setError(true)}
    />
  );
}
