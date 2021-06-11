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
  // GivewayImg,
  GivewayBottom,
  GivewayButton,
  GivewayCorsairLogo,
  Wrapper,
} from './styles';

const Layer4: React.FC = () => (
  <Root id="prizing">
    <Container>
      <Title medium>Prizing</Title>
      <QualifiersDescription style={{ paddingBottom: 20 }}>
        Each Series Will feature a prize pool of $3,300
      </QualifiersDescription>
      <Wrapper>
        <QualifiersContainer>
          <Title>Qualifiers</Title>
          <QualifiersDescription>
            All prize amounts
          </QualifiersDescription>
          <RewardsGridContainer>
            <RewardsGridItem>
              <Reward>
                <RewardBadge src="/images/badges/1st.png" alt="1st" />
                <div>
                  <RewardTitle>Cash Prize</RewardTitle>
                  <RewardCash>$1000</RewardCash>
                </div>
              </Reward>
              <Reward>
                <RewardBadge src="/images/badges/2nd.png" alt="2nd" />
                <div>
                  <RewardTitle>Cash Prize</RewardTitle>
                  <RewardCash>$700</RewardCash>
                </div>
              </Reward>
              <Reward>
                <RewardBadge src="/images/badges/3rd.png" alt="3rd" />
                <div>
                  <RewardTitle>Cash Prize</RewardTitle>
                  <RewardCash>$500</RewardCash>
                </div>
              </Reward>
            </RewardsGridItem>
            <RewardsGridItem>
              <Reward>
                <RewardBadge src="/images/badges/4th.png" alt="4th" />
                <div>
                  <RewardTitle>Cash Prize</RewardTitle>
                  <RewardCash>$250</RewardCash>
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
          <Title>Most Kills all tournament</Title>
          <GrandFinaleContainer>
            <GrandFinaleImg src="/images/badges/1st.png" alt="1v1" />
            <GrandFinaleTitle>WINNER: $200</GrandFinaleTitle>
          </GrandFinaleContainer>
        </QualifiersContainer>
        <GivewayContainer>
          <div>
            <Title>Stream Giveaway</Title>
            <GivewayDescription>
              Watch the tournament for a chance to win
            </GivewayDescription>
          </div>
          <GivewayBottom>
            <GivewayButton>
              <Button style={{ display: 'inline-block' }}>Giveaway Rules</Button>
            </GivewayButton>
            <GivewayCorsairLogo src="images/corsair.png" alt="Corsair" />
          </GivewayBottom>
        </GivewayContainer>
      </Wrapper>
    </Container>
  </Root>
);

export default Layer4;
