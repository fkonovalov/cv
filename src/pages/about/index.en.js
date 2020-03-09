import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'about',
  content: (
    <>
      <p>
        Hey, it&rsquo;s <strong>Fyodor</strong> here.
      </p>
      <p>
        My specialization lies in web development, especially the front-end.
        With over nine years of experience in this area I have the knowledge and
        experience to create scalable and maintanable code based on best
        practices. I work with HTML, CSS, SASS, Styled Components, BEM,
        Javascript и React.
      </p>
      <p>
        If you need help with design or front-end development or if you would
        like more information, send me an email at 
        <a href="/contact">please contact me</a>
      </p>

      <p>Cheers!</p>
    </>
  ),
  description: `
    I'm a frontend engineer with 8+ years of experience.
  `
};

export default props => <Page i18n={i18n} {...props} />;
