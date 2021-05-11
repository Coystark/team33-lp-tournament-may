import Button from '@/components/Button';
import React from 'react';
import {
  Root,
  Container,
  StagesContainer,
  StagesGridContainer,
  StagesGrid,
  StageGridImg,
  Title,
  PlacementRoot,
  PlacementTitle,
  PlacementContainer,
  PlacementAllItems,
  PlacementItem,
  PlacementBadge,
  PlacementBadgeIcon,
  PlacementBadgeDescription,
  PlacementBadgePoints,
  PlacementBottom,
  HeaderTitle,
  Description,
  Wrapper,
} from './styles';

const Layer3: React.FC = () => (
  <Root>
    <Container>
      <div>
        <HeaderTitle medium>Scoring & Rules</HeaderTitle>
        <Description>
          The top 10 teams from each qualifier will advance to
          the serie&apos;s broadcasted Finale to compete alongside 10 invited teams.
        </Description>
      </div>
      <Wrapper>
        <div>
          <Title>How each series works</Title>
          <StagesContainer>
            <img src="/images/layer3/retangulo.png" alt="Series Grand Finale" style={{ height: 'auto', maxWidth: '100%' }} />
            <StagesGridContainer>
              <StagesGrid>
                <div>
                  <div
                    id="stagesArrow"
                    style={{
                      position: 'absolute',
                      margin: '45px 321px',
                    }}
                  >
                    <img src="/images/layer3/small-arrow.png" alt="Arrow" />
                  </div>
                  <StageGridImg src="/images/layer3/stage-2.png" alt="Stage 2 - Click for details." />
                </div>
                <div id="stage3">
                  <div
                    id="stagesArrow"
                    style={{
                      position: 'absolute',
                      margin: '-192px 321px',
                    }}
                  >
                    <img src="/images/layer3/big-arrow.png" alt="Arrow" />
                  </div>
                  <StageGridImg src="/images/layer3/stage-3.png" alt="Stage 3 - Click for details." />
                </div>
              </StagesGrid>
              <StagesGrid style={{ justifyContent: 'space-around' }}>
                <div>
                  <div
                    id="stagesArrow"
                    style={{
                      position: 'absolute',
                      margin: '-30px 0 0 -72px',
                    }}
                  >
                    <img src="/images/layer3/medium-arrow.png" alt="Arrow" />
                  </div>
                  <StageGridImg src="/images/layer3/stage-1.png" alt="Stage 1 - Click for details." />
                </div>
              </StagesGrid>
            </StagesGridContainer>
          </StagesContainer>
        </div>
        <PlacementRoot>
          <PlacementContainer>
            <PlacementTitle>Placement</PlacementTitle>
            <PlacementAllItems>
              <PlacementItem>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/1st.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>1st Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+6 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/2nd.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>2nd Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+4 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/3rd.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>3rd Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+3 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/4th.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>4th Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+2 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/5th.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>5th Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+2 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
              </PlacementItem>
              <PlacementItem>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/6th.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>6st Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+2 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/7th.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>7th Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+1 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/8th.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>8th Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+1 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/9th.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>9th Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+1 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/10th.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>10th Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+1 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
                <PlacementBadge>
                  <PlacementBadgeIcon src="/images/badges/15th.png" alt="Rank" />
                  <div>
                    <PlacementBadgeDescription>15th Place</PlacementBadgeDescription>
                    <PlacementBadgePoints>+1 Point</PlacementBadgePoints>
                  </div>
                </PlacementBadge>
              </PlacementItem>
            </PlacementAllItems>
            <PlacementBottom>
              <Title>Gameplay scoring</Title>
              <PlacementBadge>
                <PlacementBadgeIcon src="/images/badges/Elimi.png" alt="Rank" />
                <div>
                  <PlacementBadgeDescription>Eliminations</PlacementBadgeDescription>
                  <PlacementBadgePoints>+2 Point</PlacementBadgePoints>
                </div>
              </PlacementBadge>
              <Button style={{ marginTop: 30 }}>View full rules</Button>
            </PlacementBottom>
          </PlacementContainer>

        </PlacementRoot>
      </Wrapper>
    </Container>
  </Root>
);

export default Layer3;
