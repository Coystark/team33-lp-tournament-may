import React, { useState } from 'react';
import {
  Container, Root, Title, Question, Answer, HR, Button, ViewMore, ContainerQuestions,
} from './styles';

const faq = [
  {
    question: 'Can players under the age of 18 join your tournaments?',
    answer: `Yes, players under 18 can join our free tournaments, but they cannot join
    any paid tournament unless we have a written email from one of their parents
    allowing them to participate.`,
  },
  {
    question: 'Can players under the age of 18 join your tournaments?',
    answer: `Yes, players under 18 can join our free tournaments, but they cannot join
    any paid tournament unless we have a written email from one of their parents
    allowing them to participate.`,
  },
];

const Layer5: React.FC = () => {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <Root>
      <Container>
        <Title>FAQs</Title>
        <Question>{faq[0].question}</Question>
        <Answer>{faq[0].answer}</Answer>
        {faq.map((value, index) => index > 0 && (
          <ContainerQuestions show={showFaq}>
            <Question>{value.question}</Question>
            <Answer>{value.answer}</Answer>
          </ContainerQuestions>
        ))}
        <ViewMore onClick={() => setShowFaq((value) => !value)}>{!showFaq ? 'VIEW MORE+' : 'VIEW LESS-'}</ViewMore>
        <HR />
        <Question>Can I ask a question?</Question>
        <Answer>Sure, Jump into our Discord and drop us a line.</Answer>
        <Button>Join the Official Discord</Button>
      </Container>
    </Root>
  );
};

export default Layer5;
