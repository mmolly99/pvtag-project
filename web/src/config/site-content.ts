// Site content configuration
// All text content should be defined here for easy maintenance and localization

export const siteContent = {
  brand: {
    name: 'PVTAG',
    logo: '/logo.png',
  },

  navigation: [
    { label: 'Products', href: '/products' },
    { label: 'Software', href: '/software' },
    { label: 'Infinite Trails', href: '/community', highlight: true },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Support', href: '/support' },
  ],

  infiniteTrails: {
    tagline: 'TAG',
    description:
      "The premier destination for sun-powered pet explorers. Share your pet's off-grid adventures, discover community-verified secret trails, and use our AI-driven heatmaps to visualize the infinite paths your companions tread under the sun.",
  },
} as const;

export type NavItem = (typeof siteContent.navigation)[number];
