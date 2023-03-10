import * as React from 'react';
import Head from 'next/head';

export interface SEOData {
  title: string;
  thumbnailUrl: string;
  description: string;
  url: string;
}

export interface SEOProps {
  data: SEOData;
}

export function SEO({ data }: SEOProps) {
  const { title, thumbnailUrl, description, url } = data;
  return (
    <Head>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={thumbnailUrl} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={thumbnailUrl} />
    </Head>
  );
}
