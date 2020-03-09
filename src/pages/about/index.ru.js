import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'about',
  content: (
    <>
      <p>
        Моя специализация — front end веб-разработка. Обладая более чем
        девятилетним опытом работы в этой области, я обладаю знаниями и опытом
        по созданию современных масштабируемых веб-приложений. В основном я
        работаю с HTML, CSS, SASS, Styled Components, BEM, Javascript и React.
      </p>
      <p>
        Если вам нужна помощь с дизайном или интерфейсной разработкой или если
        вы хотите получить больше информации, свяжитесь со мной
        <a href="/contact">свяжитесь со мной</a>
      </p>
    </>
  ),
  description: `
    Frontend разработчик.
  `
};

export default props => <Page i18n={i18n} {...props} />;
