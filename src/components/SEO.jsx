import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url }) {
  return (
    <Helmet>
      {/* Título e Descrição Padrão (Aparece na aba do navegador e no Google) */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph (Para WhatsApp, Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter (Garante compatibilidade com outras redes) */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}