import styled from 'styled-components';
import img from '../assets/bgImage.jpg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;

  ::before {
    content: '';
    background-image: url('${img}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
