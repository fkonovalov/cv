import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'contact',
  content: (
    <>
      <p>
        I’d love to chat and meet new people. I’m looking for problems worth
        solving, a place that will challenge me, and opportunities that I can
        help others and myself grow.
      </p>
      <p>Let&rsquo;s do something awesome.</p>
      <p>
        Email:&nbsp;
        <a href="mailto:hello@fkonovalov.com">hello@fkonovalov.com</a>
        <br />
        Linkedin:&nbsp;
        <a
          href="https://linkedin.com/in/fkonovalov/"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://linkedin.com/in/fkonovalov/
        </a>
      </p>
    </>
  ),
  description: `
    I’d love to chat and meet new people. I’m looking for problems worth solving, a place that will challenge me, and opportunities that I can help others and myself grow. 
  `
};

export default props => <Page i18n={i18n} {...props} />;
