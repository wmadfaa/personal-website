import React from 'react';
import Helmet from 'react-helmet';

export interface SeoProps {
  description?: string;
  lang?: string;
  author?: string;
  title: string;
}

const SEO: React.FC<SeoProps> = ({ description, lang, author, title }) => {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  description: ``,
};

export default SEO;
