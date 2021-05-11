import styled from 'styled-components';

interface Props {
  big?: boolean;
  medium?: boolean;
}

const Title = styled.div<Props>`
  font-size: 30px;
  font-weight: bold;

  ${(props) => props.big && `
    font-size: 60px;
    font-weight: bold;
    text-shadow: 0px 0px 8px rgb(252 218 247 / 75%);

    @media(max-width: 480px) {
      font-size: 40px;
    }
  `}

${(props) => props.medium && `
    font-size: 40px;
    font-weight: bold;
    text-shadow: 0px 0px 8px rgb(252 218 247 / 75%);
  `}
`;

Title.defaultProps = {
  big: false,
  medium: false,
};

export default Title;
