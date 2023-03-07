import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>NFT Listing</title>
      <link rel='icon' href={`${process.env.PUBLIC_URL}/favicon.ico`} />
      <link rel='canonical' href='https://test.com' />
      <meta name='description' content='NFT Listing' />
      <meta property='og:title' content='NFT Listing' />
    </Helmet>
  );
}
