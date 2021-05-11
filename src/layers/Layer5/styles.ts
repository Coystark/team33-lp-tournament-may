import styled from 'styled-components';
import { IContainerQuestionsProps } from './types';

export const Container = styled.div`
  max-width: 1500px;
  padding: 90px 20px 90px 20px;
  width: 100%;
  position: absolute;
    
 /* height: 700px;
  overflow-y: auto;
  overflow-x: auto;
  
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: white;
    background-color: white;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: purple;
    background-color: purple;
  }*/
`;

export const Root = styled.div`
  background-color: #3f0d62;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 1080px;

  background: url("images/layer5bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
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
`;

export const Question = styled.div`
  font-size: 20px;
  padding: 20px 0 20px 0;
`;

export const Answer = styled.div`
  padding-bottom: 20px;
  font-family: 'Source Sans Pro', sans-serif;
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
