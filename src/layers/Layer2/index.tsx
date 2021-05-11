import { Title } from '@/components/index';
import React from 'react';
import {
  Root,
  Description,
  CardsContainer,
  Card,
  CardHeader,
  CardValue,
  CardDescription,
  SponsorsTitle,
  SponsorsContainer,
  SponsorsCard,
  Sponsors,
  HR,
} from './styles';

const Layer2: React.FC = () => (
  <Root>
    <Title big>
      Team 33 Championship Series 2021
    </Title>
    <Description>
      Drop into Fortnite with your duo and join this year&apos;s
      free-to-enter Team 33 Championship Series.
      Signup and compete for your chance to win.
    </Description>
    <CardsContainer>
      <Card>
        <CardHeader>OVER</CardHeader>
        <CardValue data-text="$33,000">$33,000</CardValue>
        <CardDescription>in cash and prizes</CardDescription>
      </Card>
      <Card>
        <CardHeader>TOTAL OF</CardHeader>
        <CardValue data-text="6 SERIES">6 SERIES</CardValue>
        <CardDescription>through the year</CardDescription>
      </Card>
    </CardsContainer>
    <SponsorsContainer>
      <SponsorsTitle>Sponsored by</SponsorsTitle>
      <SponsorsCard>
        <Sponsors src="/images/sponsors.png" />
        <HR />
      </SponsorsCard>
    </SponsorsContainer>

  </Root>
);

/*
      <Title>
      Team 33 Championship Series 2021
    </Title>
    <Description>
      Drop into Fortnite with your duo and join this year&apos;s
      free-to-enter Team 33 Championship Series.
      Signup and compete for your chance to win.
    </Description>
    <CardsContainer>
      <Card>
        <CardHeader>OVER</CardHeader>
        <CardValue data-text="$33,000">$33,000</CardValue>
        <CardDescription>in cash and prizes</CardDescription>
      </Card>
      <Card>
        <CardHeader>TOTAL OF</CardHeader>
        <CardValue data-text="6 SERIES">6 SERIES</CardValue>
        <CardDescription>through the year</CardDescription>
      </Card>
    </CardsContainer>
*/

export default Layer2;
