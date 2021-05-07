import styled from 'styled-components';
import { IContainerQuestionsProps } from './types';

export const Container = styled.div`
  max-width: 1500px;
  margin: 90px 20px 90px 20px;
  width: 100%;
`;

export const Root = styled.div`
  background-color: grey;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const ContainerQuestions = styled.div<IContainerQuestionsProps>`
  transition: opacity 1s ease-out;
  opacity: ${(props) => (props.show ? '1' : '0')};
  height: ${(props) => (props.show ? 'auto' : '0')};
  overflow: hidden;
}
`;

export const Question = styled.div`
  font-size: 20px;
  padding: 20px 0 20px 0;
`;

export const Answer = styled.div`
  padding-bottom: 20px;
`;

export const ViewMore = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 20px;
  font-size: 18px;
  text-align: right;
  cursor: pointer;

  @media(max-width: 480px) {
    text-align: center;
  }
`;

export const HR = styled.div`
  height: 2px;
  background-color: white;
  margin: 50px 0 50px 0;
`;

export const Button = styled.div`
  padding: 20px 40px 20px 40px;
  border-radius: 20px;
  border: solid #7e2ec3 2px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 40px;
  cursor: pointer;
  display: inline-block;

  @media(max-width: 480px) {
    text-align: center;
    display: block;
  }
`;
