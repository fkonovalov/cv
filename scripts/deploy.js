var ghpages = require('gh-pages');

console.log('Starting github pages deploy...');

ghpages.publish('public', {
  branch: 'master',
  repo: 'git@github.com:fkonovalov/fkonovalov.github.io.git',
  user: {
    name: 'Fyodor Konovalov',
    email: 'boxfedor@gmail.com'
  }
}, function(err) { console.error('Error: ' + err); });

console.log('Deploy finished.');
