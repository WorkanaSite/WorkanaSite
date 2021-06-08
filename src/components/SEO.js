import Head from 'next/head';
const URL_SITE = process.env.NEXT_PUBLIC_URL_END_POINT;
const DESCRIPTION = process.env.NEXT_PUBLIC_SEO_DESCRIPTION;
const IMAGE = process.env.NEXT_PUBLIC_SEO_IMAGE;

const properties = title => [
  {
    property: 'og:url',
    content: URL_SITE,
  },
  {
    property: 'og:title',
    content: title,
  },
  {
    property: 'og:description',
    content: DESCRIPTION,
  },
  {
    property: 'og:image',
    content: IMAGE,
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'twitter:url',
    content: URL_SITE,
  },
  {
    property: 'twitter:title',
    content: title,
  },
  {
    property: 'twitter:description',
    content: DESCRIPTION,
  },
  {
    property: 'twitter:image',
    content: IMAGE,
  },
];

const SEO = ({title = ''}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="robots" content="index, follow" />

      <title>
        {process.env.NEXT_PUBLIC_NAME_SITE} | {title}
      </title>
      <meta name="title" content={title} />
      <meta name="description" content={DESCRIPTION} />
      {/* Properties */}
      {properties(title).map((item, index) => (
        <meta key={index} property={item.property} content={item.content} />
      ))}
      <link rel="dns-prefetch" href={URL_SITE} />
      <link rel="preconnect" href={URL_SITE} />
      <link rel="shortcut icon" type="image/png" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Head>
  );
};

export default SEO;
