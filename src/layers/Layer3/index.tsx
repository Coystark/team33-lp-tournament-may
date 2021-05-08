import React from 'react';
import {
  Root,
  Container,
  StagesContainer,
  StagesGridContainer,
  StagesGrid,
  StageGridImg,
  Rank,
  RankBadge,
  RankPlace,
  RankPoints,
  PlacementContainer,
  GridPlacementContainer,
  GridPlacementItem,
  Title,
} from './styles';

const Layer3: React.FC = () => (
  <Root>
    <Container>
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
              <div>
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
      <PlacementContainer>
        <Title>Placement</Title>
        <div>
          <GridPlacementContainer>
            <GridPlacementItem>
              <Rank>
                <RankBadge style={{ height: '73px' }}>
                  <img src="/images/badges/1st.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>1st Place</RankPlace>
                  <RankPoints>+6 Point</RankPoints>
                </div>
              </Rank>
              <Rank>
                <RankBadge style={{ height: '73px' }}>
                  <img src="/images/badges/2nd.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>2st Place</RankPlace>
                  <RankPoints>+4 Point</RankPoints>
                </div>
              </Rank>
              <Rank>
                <RankBadge style={{ height: '68px' }}>
                  <img src="/images/badges/3rd.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>3rd Place</RankPlace>
                  <RankPoints>+3 Point</RankPoints>
                </div>
              </Rank>
              <Rank>
                <RankBadge style={{ height: '73px' }}>
                  <img src="/images/badges/4th.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>4th Place</RankPlace>
                  <RankPoints>+2 Point</RankPoints>
                </div>
              </Rank>
              <Rank>
                <RankBadge style={{ height: '64px' }}>
                  <img src="/images/badges/5th.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>5th Place</RankPlace>
                  <RankPoints>+2 Point</RankPoints>
                </div>
              </Rank>
            </GridPlacementItem>
            <GridPlacementItem style={{ marginLeft: 120 }}>
              <Rank>
                <RankBadge style={{ height: '64px' }}>
                  <img src="/images/badges/6th.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>6th Place</RankPlace>
                  <RankPoints>+2 Point</RankPoints>
                </div>
              </Rank>
              <Rank>
                <RankBadge style={{ height: '64px' }}>
                  <img src="/images/badges/7th.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>7th Place</RankPlace>
                  <RankPoints>+1 Point</RankPoints>
                </div>
              </Rank>
              <Rank>
                <RankBadge style={{ height: '64px' }}>
                  <img src="/images/badges/8th.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>8th Place</RankPlace>
                  <RankPoints>+1 Point</RankPoints>
                </div>
              </Rank>
              <Rank>
                <RankBadge style={{ height: '64px' }}>
                  <img src="/images/badges/9th.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>9th Place</RankPlace>
                  <RankPoints>+1 Point</RankPoints>
                </div>
              </Rank>
              <Rank>
                <RankBadge style={{ height: '64px' }}>
                  <img src="/images/badges/10th.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>10th Place</RankPlace>
                  <RankPoints>+1 Point</RankPoints>
                </div>
              </Rank>
              <Rank>
                <RankBadge style={{ height: '64px' }}>
                  <img src="/images/badges/15th.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>15th Place</RankPlace>
                  <RankPoints>+1 Point</RankPoints>
                </div>
              </Rank>

              <Title style={{ marginTop: 40, padding: 0 }}>Gameplay scoring</Title>

              <Rank>
                <RankBadge style={{ height: '63px' }}>
                  <img src="/images/badges/Elimi.png" alt="Rank" />
                </RankBadge>
                <div>
                  <RankPlace>Eliminations</RankPlace>
                  <RankPoints>+2 Point</RankPoints>
                </div>
              </Rank>
            </GridPlacementItem>
          </GridPlacementContainer>
        </div>
      </PlacementContainer>
    </Container>
  </Root>
);

export default Layer3;
