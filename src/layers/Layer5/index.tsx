import Title from '@/components/Title';
import React, { useState } from 'react';
import {
  Container, Root, Question, Answer, HR, Button, ViewMore, ContainerQuestions,
} from './styles';

const faq = [
  {
    question: 'Are there any hidden costs to enter your Fortnite tournaments?',
    answer: 'No, absolutely no hidden costs. We make our money from sponsors, and from participating in other tournaments. Most of our tournaments are free to join. However, if we ever organize a tournament that has a cost to enter, we will let you know clearly and in advance so you can choose whether you want to participate or not.',
  },
  {
    question: 'Are these tournaments restricted to specific countries?',
    answer: 'No! our Fortnite online tournaments are open to players worldwide. Flying to LA for the finale is optional and you are free to play the finale from your location if you choose to do so. Keep in mind that our tournaments take place in Eastern Standard Time (New York/Toronto time zone) during the weekends. We will list the exact schedule in advance so you can plan accordingly.',
  },
  {
    question: 'What are the rules to play?',
    answer: 'The usual Fortnite rules apply. If someone is disconnected from the game, they will automatically forfeit the match. Please be respectful to other players and keep the language PG. No insulting or name-calling. Anyone deemed to be disrespectful or displaying any inappropriate behavior will be removed from the tournament. Any issues or concerns can be brought to info@team33gaming.com.',
  },
  {
    question: 'How are the prizes delivered?',
    answer: 'Winners will be contacted independently. We can pay using PayPal or wire transfer for cash prizes. If there is a Team 33 contract on the line, we will be contacting the winner and include a copy of the contract for them to review before signing.',
  },
  {
    question: 'Can players under the age of 18 join your tournaments?',
    answer: 'Yes, players under 18 can join our free tournaments, but they cannot join any paid tournament unless we have a written email from one of their parents allowing them to participate.',
  },
];

const Layer5: React.FC = () => {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <Root id="faqs">
      <Container>
        <Title medium>FAQs</Title>
        <Question>{faq[0].question}</Question>
        <Answer>{faq[0].answer}</Answer>
        <Question>{faq[1].question}</Question>
        <Answer>{faq[1].answer}</Answer>
        {faq.map((value, index) => index > 1 && (
          <ContainerQuestions show={showFaq}>
            <Question>{value.question}</Question>
            <Answer>{value.answer}</Answer>
          </ContainerQuestions>
        ))}
        <ViewMore onClick={() => setShowFaq((value) => !value)}>{!showFaq ? 'VIEW MORE+' : 'VIEW LESS-'}</ViewMore>
        <HR />
        {!showFaq && (
          <>
            <Question>Can I ask a question?</Question>
            <Answer>Sure, Jump into our Discord and drop us a line.</Answer>
          </>
        )}
        <Button href="https://discord.gg/nFQZZXR6BC" target="_blank">Join the Official Discord</Button>
      </Container>
    </Root>
  );
};

export default Layer5;
