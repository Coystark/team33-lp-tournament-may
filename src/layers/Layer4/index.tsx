import React from 'react';
import { Button, Title } from '@/components/index';

import {
  Root,
  Container,
  QualifiersContainer,
  QualifiersDescription,
  RewardsGridContainer,
  RewardsGridItem,
  Reward,
  RewardBadge,
  RewardTitle,
  RewardCash,
  GrandFinaleContainer,
  GrandFinaleImg,
  GrandFinaleTitle,
  GivewayContainer,
  GivewayDescription,
  GivewayImg,
  GivewayBottom,
  GivewayButton,
  GivewayCorsairLogo,
} from './styles';

const Layer4: React.FC = () => (
  <Root>
    <Container>
      <QualifiersContainer>
        <Title>Qualifiers</Title>
        <QualifiersDescription>
          All prize amounts will be split evenly between both players
        </QualifiersDescription>
        <RewardsGridContainer>
          <RewardsGridItem>
            <Reward>
              <RewardBadge src="/images/badges/1st.png" alt="1st" />
              <div>
                <RewardTitle>Cash Prize</RewardTitle>
                <RewardCash>$700</RewardCash>
              </div>
            </Reward>
            <Reward>
              <RewardBadge src="/images/badges/2nd.png" alt="2nd" />
              <div>
                <RewardTitle>Cash Prize</RewardTitle>
                <RewardCash>$450</RewardCash>
              </div>
            </Reward>
            <Reward>
              <RewardBadge src="/images/badges/3rd.png" alt="3rd" />
              <div>
                <RewardTitle>Cash Prize</RewardTitle>
                <RewardCash>$300</RewardCash>
              </div>
            </Reward>
          </RewardsGridItem>
          <RewardsGridItem>
            <Reward>
              <RewardBadge src="/images/badges/4th.png" alt="4th" />
              <div>
                <RewardTitle>Cash Prize</RewardTitle>
                <RewardCash>$200</RewardCash>
              </div>
            </Reward>
            <Reward>
              <RewardBadge src="/images/badges/5th.png" alt="5th" />
              <div>
                <RewardTitle>Cash Prize</RewardTitle>
                <RewardCash>$150</RewardCash>
              </div>
            </Reward>
            <Reward>
              <RewardBadge src="/images/badges/6-10.png" alt="6-10" />
              <div>
                <RewardTitle>Cash Prize</RewardTitle>
                <RewardCash>$100</RewardCash>
              </div>
            </Reward>
          </RewardsGridItem>
        </RewardsGridContainer>
        <Title>TOP 2 GRAND FINALE</Title>
        <GrandFinaleContainer>
          <GrandFinaleImg src="/images/badges/1v1.png" alt="1v1" />
          <GrandFinaleTitle>WINNER: $1,000</GrandFinaleTitle>
        </GrandFinaleContainer>
      </QualifiersContainer>
      <GivewayContainer>
        <Title>Stream Giveaway</Title>
        <GivewayDescription>
          Watch the tournament for a chance to win
        </GivewayDescription>
        <GivewayImg src="/images/giveway-bg.png" alt="Giveaway" />
        <GivewayBottom>
          <GivewayButton href="/#">
            <Button style={{ display: 'inline-block' }}>Giveaway Rules</Button>
          </GivewayButton>
          <GivewayCorsairLogo src="images/corsair.png" alt="Corsair" />
        </GivewayBottom>
      </GivewayContainer>
    </Container>
  </Root>
);

export default Layer4;
