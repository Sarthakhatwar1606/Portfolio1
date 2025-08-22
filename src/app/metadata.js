export async function generateMetadata() {
  return {
    title: 'Sarthak Hatwar | Software Engineer | Full Stack Developer',
    description: 'Crafting robust and scalable software solutions with precision and innovation.',
    keywords: 'Sarthak Hatwar, Software Engineer, Frontend Developer, Backend Developer, Full Stack Developer, Portfolio',
    openGraph: {
      title: 'Sarthak Hatwar - Software Engineer',
      description: 'Crafting robust and scalable software solutions with precision and innovation.',
      images: ['/portfolio/images/my-profile.jpg'],
    },
    alternates: {
      canonical: 'https://sarthakhatwar1606.github.io/portfolio/',
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'application-name': 'Sarthak Hatwar Portfolio',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sarthak Hatwar',
      jobTitle: 'Data Engineer',
      url: 'https://sarthakhatwar1606.github.io/portfolio/',
      image: '/portfolio/images/my-profile.jpg',
      sameAs: [
        'https://www.linkedin.com/in/sarthakhatwar1606/',
        'https://github.com/sarthakhatwar'
      ]
    }
  };
} 