import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const Global = createGlobalStyle`

body {
color: #000;
}

ul {
margin:  0 ;
padding: 0;
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

  h1,p {
    font-size: 50px;
    color: #fff;
    margin: 0;
  }

  p {
    font-size: 20px;
  }


`;
