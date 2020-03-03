import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'contact',
  content: (
    <>
      <p>I&rsquo;d love to <strong>chat</strong> and <strong>meet new people</strong>. I&rsquo;m looking for <strong>problems worth solving</strong>, a place that will <strong>challenge me</strong>, and <strong>opportunities</strong> that I can help others and myself <strong>grow</strong>.&nbsp;</p>
      <p>Let&rsquo;s do something awesome.</p>
      <p>Email:&nbsp;<a href="mailto:boxfedor@gmail.com.com">hello@hugomagalhaes.com</a><br />Linkedin:&nbsp;<a href="https://www.linkedin.com/in/fkonovalov/" target="_blank">https://linkedin.com/in/fkonovalov/</a><br />GitHub:&nbsp;<a href="https://github.com/fkonovalov" target="_blank">https://github.com/fkonovalov</a></p>
    </>
  ),
  description: `
    I’d love to chat and meet new people. I’m looking for problems worth solving, a place that will challenge me, and opportunities that I can help others and myself grow. 
  `
};

export default (props) => <Page i18n={i18n} {...props} />;
