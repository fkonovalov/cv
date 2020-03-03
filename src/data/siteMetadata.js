const languages = require('./languages');

module.exports = {
  siteUrl: 'https://mycv.com',
  description:
    'Frontend developer. I build high-performance products.',
  author: {
    name: 'Fyodor Konovalov',
    bio:
      'I\'m a co-founder and frontend developer lead at <a href="https://tagbox.me"><b>TagBox</b></a>. I build high-performance products and teams.  I\'m a software engineer with 8+ years of experience.',
    homeCity: 'Saint-Petersburg',
    email: 'boxfedor@gmail.com',
    twitter: 'discotune',
    defaultLink: 'https://github.com/fkonovalov'
  },
  sourceCodeLink: 'https://github.com/fkonovalov/cv',
  disqusShortname: 'fkonovalov',
  menu: [
    { label: 'home', slug: '/' },
    { label: 'about', slug: '/about/' },
    { label: 'blog', slug: '/blog/' },
    // { label: 'talks', slug: '/talks/' },
    { label: 'contact', slug: '/contact/' },
  ],
  languages,
  contact: [
    {
      type: 'email',
      value: 'boxfedor@gmail.com',
      link: 'mailto:boxfedor@gmail.com'
    },
    {
      type: 'phone',
      value: '+7 965 7570431',
      country: 'ru',
      link: 'tel:+7 965 7570431'
    }
  ]
};
