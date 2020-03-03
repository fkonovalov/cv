const authors = {
  hugomn: {
    name: 'Fyodor Konovalov',
    additionalName: 'fkonovalov',
    address: 'Saint-Petersburg RU',
    birthDate: '1987-09-06',
    birthPlace: 'Russia',
    brand: 'Fyodor Konovalov, Software Engineer, Front-end engineer, Senior ReactJs developer',
    children: '...',
    email: 'boxfedor@gmail.com',
    familyName: 'Konovalov',
    gender: 'Male',
    givenName: 'Fyodor',
    height: '...',
    homeLocation: 'Saint-Petersburg',
    jobTitle: 'Software Engineering',
    knows: '...',
    memberOf: '...',
    nationality: 'Russian',
    owns: '...',
    parent: '...',
    performerIn: '...',
    publishingPrinciples: '...',
    relatedTo: '...',
    seeks: '...',
    sibling: '...',
    spouse: {
      additionalName: 'Lunara Leto Costa',
      name: 'Lunara Leto Costa',
      givenName: 'Lunara',
      familyName: 'Costa',
      gender: 'Female',
      nationality: 'Brazilian',
      homeLocation: 'Berlin'
    },
    telephone: '...',
    weight: '...',
    workLocation: '...',
    worksFor: '...',
    description: '...',
    disambiguatingDescription: '...',
    identifier: '...',
    image: 'http://www.gravatar.com/avatar/',
    sameAs: '',
    url: ''
  }
};

const getAuthor = (id) => {
  const author = {
    ...authors[id],
    '@type': 'Person'
  };
  return author
    ? author
    : authors[0];
};

module.exports = {
  authors,
  getAuthor
};
