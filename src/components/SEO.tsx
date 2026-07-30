import React, { useEffect } from 'react';
import { STORE_INFO } from '../data/pharmacyData';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  faqSchemaData?: { question: string; answer: string }[];
  breadcrumbItems?: { name: string; url: string }[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "Vijay Medical Store Gaya, Pharmacy in Gewalbigha Gaya, Medical Store near Rampur Gaya, Buy genuine medicines Gaya Bihar, Online medicine WhatsApp order Gaya, Gouri Road medical store, BP machine Gaya",
  canonicalUrl = window.location.href,
  ogType = "website",
  faqSchemaData,
  breadcrumbItems
}) => {
  useEffect(() => {
    // Document Title
    const fullTitle = `${title} | ${STORE_INFO.name} Gaya`;
    document.title = fullTitle;

    // Helper to update meta tag
    const updateMeta = (nameAttr: string, value: string, attrName = 'name') => {
      let el = document.querySelector(`meta[${attrName}="${nameAttr}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, nameAttr);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:type', ogType, 'property');
    updateMeta('og:url', canonicalUrl, 'property');
    updateMeta('og:site_name', STORE_INFO.name, 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);

    // Canonical link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Inject Schemas
    const schemas: object[] = [
      // Pharmacy LocalBusiness Schema
      {
        "@context": "https://schema.org",
        "@type": "Pharmacy",
        "name": STORE_INFO.name,
        "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "telephone": STORE_INFO.phone,
        "priceRange": "₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gouri Rd, Ram Pur, Mohan Nagar, Gewalbigha",
          "addressLocality": "Gaya",
          "addressRegion": "Bihar",
          "postalCode": "823001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 24.78912,
          "longitude": 85.00123
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "07:30",
            "closes": "22:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "08:00",
            "closes": "21:30"
          }
        ],
        "sameAs": [
          STORE_INFO.mapDirectLink
        ]
      }
    ];

    // FAQ Schema if available
    if (faqSchemaData && faqSchemaData.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchemaData.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      });
    }

    // Breadcrumb Schema if available
    if (breadcrumbItems && breadcrumbItems.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": item.name,
          "item": item.url
        }))
      });
    }

    // Append JSON-LD script
    let scriptEl = document.getElementById('json-ld-schema');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'json-ld-schema';
      scriptEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemas);

  }, [title, description, keywords, canonicalUrl, ogType, faqSchemaData, breadcrumbItems]);

  return null;
};
