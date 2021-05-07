import styled from 'styled-components';

const PogText = styled.div`
  font-size: 87px;
  font-family: "Teko",Arial,Helvetica,sans-serif;
  position: relative;
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  /*background-image: linear-gradient(180deg, #ba5beb 28.91%, #803aa4 88.28%);*/
  background-image: linear-gradient(180deg, #FFE6CC 28.91%, #FF7242 88.28%);
  text-align: center;

  &:after {
    background: none;
    content: attr(data-text);
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    position: absolute;
    //text-shadow: 0px 0px 8px #c663da;
    text-shadow: 0px 0px 8px red;
  }
`;

// original background-image: linear-gradient(180deg, #FFE6CC 28.91%, #FF7242 88.28%);

export default PogText;
