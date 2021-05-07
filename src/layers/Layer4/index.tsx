import React from 'react';
import { Title } from '@/components/index';

import {
  Root,
  Container,
  QualifiersContainer,
  RewardsContainer,
  RewardsColumn,
  RewardsItemContainer,
  RewardsItemImg,
  RewardsItemTitle,
  RewardsItemValue,
  GrandFinaleContainer,
  GrandFinaleImg,
  GrandFinaleTitle,
  GivewayContainer,
  GivewayDescription,
  GivewayImg,
} from './styles';

const Layer4: React.FC = () => (
  <Root>
    <Container>
      <QualifiersContainer>
        <Title>Qualifiers</Title>
        <p>All prize amounts will be split evenly between both players</p>
        <RewardsContainer>
          <RewardsColumn>
            <RewardsItemContainer>
              <RewardsItemImg src="/images/tmp_icon_rank.png" />
              <div>
                <RewardsItemTitle>Cash Prize</RewardsItemTitle>
                <RewardsItemValue>$700</RewardsItemValue>
              </div>
            </RewardsItemContainer>
            <RewardsItemContainer>
              <RewardsItemImg src="/images/tmp_icon_rank.png" />
              <div>
                <RewardsItemTitle>Cash Prize</RewardsItemTitle>
                <RewardsItemValue>$450</RewardsItemValue>
              </div>
            </RewardsItemContainer>
            <RewardsItemContainer>
              <RewardsItemImg src="/images/tmp_icon_rank.png" />
              <div>
                <RewardsItemTitle>Cash Prize</RewardsItemTitle>
                <RewardsItemValue>$300</RewardsItemValue>
              </div>
            </RewardsItemContainer>
          </RewardsColumn>
          <div>
            <RewardsItemContainer>
              <RewardsItemImg src="/images/tmp_icon_rank.png" />
              <div>
                <RewardsItemTitle>Cash Prize</RewardsItemTitle>
                <RewardsItemValue>$200</RewardsItemValue>
              </div>
            </RewardsItemContainer>
            <RewardsItemContainer>
              <RewardsItemImg src="/images/tmp_icon_rank.png" />
              <div>
                <RewardsItemTitle>Cash Prize</RewardsItemTitle>
                <RewardsItemValue>$150</RewardsItemValue>
              </div>
            </RewardsItemContainer>
            <RewardsItemContainer>
              <RewardsItemImg src="/images/tmp_icon_rank.png" />
              <div>
                <RewardsItemTitle>Cash Prize</RewardsItemTitle>
                <RewardsItemValue>$100</RewardsItemValue>
              </div>
            </RewardsItemContainer>
          </div>
        </RewardsContainer>
        <Title>TOP 2 GRAND FINALE</Title>
        <GrandFinaleContainer>
          <GrandFinaleImg src="/images/tmp_icon_rank.png" />
          <GrandFinaleTitle>WINNER: $1,000</GrandFinaleTitle>
        </GrandFinaleContainer>
      </QualifiersContainer>
      <GivewayContainer>
        <Title>Stream Giveaway</Title>
        <GivewayDescription>
          Watch the tournament for a chance to win
        </GivewayDescription>
        <GivewayImg src="/images/tmp_giveway.png" />
      </GivewayContainer>
    </Container>
  </Root>
);

export default Layer4;
