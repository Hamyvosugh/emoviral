// types/search.ts
export interface SearchItem {
    label: string;
    href: string;
    keywords: string[];
    description?: string;
    category?: string;
  }
  
  // data/searchItems.ts
  export const searchItems: SearchItem[] = [
    {
      label: 'Webentwicklung',
      href: '/webdevelopment',
      keywords: ['website', 'entwicklung', 'web design', 'frontend', 'backend', 'responsive'],
      description: 'Professionelle Webentwicklung für Ihr Unternehmen',
      category: 'Services'
    },
    {
      label: 'E-Commerce Lösungen',
      href: '/webdevelopment/ecommerce',
      keywords: ['online shop', 'e-commerce', 'verkaufen', 'shop system', 'woocommerce', 'shopify'],
      description: 'E-Commerce Lösungen für Ihren Online-Shop',
      category: 'Services'
    },
    {
      label: 'SEO Optimierung',
      href: '/digitalmarketing/seo',
      keywords: ['suchmaschinenoptimierung', 'google ranking', 'seo', 'keywords', 'optimierung'],
      description: 'Verbessern Sie Ihr Google Ranking',
      category: 'Digital Marketing'
    },
    {
      label: 'KI Chatbots',
      href: '/ki',
      keywords: ['chatbot', 'kundenservice', 'automatisierung', 'ki', 'bot', 'chat'],
      description: 'Intelligente Chatbots für Ihren Kundenservice',
      category: 'KI Integration'
    },
    {
        label: 'Kontakt',
        href: '/kontakt',
        keywords: ['whatsapp', 'telefone', 'telegram', 'form', 'kontakt', 'nachrichten', 'chat'],
        description: 'Intelligente Chatbots für Ihren Kundenservice',
        category: 'KI Integration'
      }
  ];