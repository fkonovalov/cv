import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'about',
  content: (
    <>
      <p>
        Hello, it&rsquo;s <strong>Fyodor</strong> here.
      </p>
      <p>
        I&rsquo;m a software engineer with 8 years of experience. I&rsquo;ve started my career when I was{' '}
        <strong>18</strong>, playing around with HTML, CSS, and JavaScript, creating small websites for companies.
      </p>
      <p>
        If you want to know more, <a href="/contact">please contact me</a>. I&rsquo;d love to chat or have a{' '}
        <strong>beer</strong>.
      </p>
      <p>Cheers!</p>
    </>
  ),
  description: `
    Engineering Lead e desenvolvedor web com 12 anos de experiência.
  `
};

export default (props) => <Page i18n={i18n} {...props} />;

