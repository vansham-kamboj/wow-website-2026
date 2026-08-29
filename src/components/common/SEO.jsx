import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, type = "website" }) => {
    const siteName = "Wow Global Studies";
    const fullTitle = title ? (title.includes(siteName) ? title : `${title} - ${siteName}`) : siteName;
    const defaultImage = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"; // Default abstract education image
    const finalImage = image || defaultImage;
    const baseUrl = "https://www.wowglobalstudies.com";
    const finalUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : baseUrl;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            {finalUrl && <link rel="canonical" href={finalUrl} />}
            
            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={finalImage} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={finalImage} />
        </Helmet>
    );
};

export default SEO;
