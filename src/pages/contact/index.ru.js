import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'contact',
  content: (
    <>
      <p>
        Мне нравится общаться и заводить новые знакомства. Я в поисках задач,
        требующих решений, работы дающей мне новые испытания и возможности,
        которые помогут профессионально расти мне и другим специалистам.
      </p>
      <p>
        Email:&nbsp;
        <a href="mailto:hello@fkonovalov.com">hello@fkonovalov.com</a>
        <br />
        Linkedin:&nbsp;
        <a
          href="https://www.linkedin.com/in/fkonovalov/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://linkedin.com/in/fkonovalov/
        </a>
      </p>
    </>
  ),
  description: `
    Мне нравится общаться и заводить новые знакомства. Я в поисках задач,
    требующих решений, работы дающей мне новые испытания и возможности,
    которые помогут профессионально расти мне и другим специалистам. 
  `
};

export default props => <Page i18n={i18n} {...props} />;
