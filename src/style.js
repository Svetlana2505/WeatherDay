import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const Global = createGlobalStyle`

body {
background-color: #fff;

}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {

  list-style: none;
}

a{
  text-decoration: none;

}

img {
  display: block;
  max-width: 100%;
  height: 100%;
}

  h1 {
    font-size: 50px;
    color: #fff;
  }

  p {
    font-size: 25px;
    color: #fff;
  }


`;
