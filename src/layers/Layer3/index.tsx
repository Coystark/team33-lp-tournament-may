import { Button, Modal, Rules } from '@/components/index';
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

const Layer3: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [grandFinaleModal, setGrandFinaleModal] = React.useState(false);
  const [stage1Modal, setStage1Modal] = React.useState(false);
  const [stage2Modal, setStage2Modal] = React.useState(false);
  const [stage3Modal, setStage3Modal] = React.useState(false);

  return (
    <Root id="scoring-rules">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Rules"
      >
        <Rules />
      </Modal>

      <Modal
        isOpen={grandFinaleModal}
        onRequestClose={() => setGrandFinaleModal(false)}
        contentLabel="Series Grand Finale"
      >
        <strong><p>Series Grand Finale</p></strong>
        <ul>
          <li>Open Qualifiers must have 4000+ Hype Points</li>
          <li>Players must submit their 3 best games on Friday April 16th to play in next stage</li>
          <li>Screenshot MUST include time and date</li>
          <li>Must screenshot your Hype Points and Fortnite name</li>
          <li>Ranking will be based on eliminations and game position</li>
          <li>Top 99 players will qualify for Stage 2</li>
          <li>Must submit screenshots by 11:59PM to AgentTeam33 on Discord</li>
          <li>Date April 16th all day</li>
        </ul>
      </Modal>

      <Modal
        isOpen={stage1Modal}
        onRequestClose={() => setStage1Modal(false)}
        contentLabel="Stage 1"
      >
        <strong><p>Stage 1</p></strong>
        <ul>
          <li>Officially streamed on Twitch @OfficialTeam33</li>
          <li>2 Day event, 7 games played on both days</li>
          <li>Points will accumulate between both days to get top 2</li>
          <li>Ranking will be based on Eliminations and Position</li>
          <li>Top 2 players will move on to Stage 3</li>
          <li>Date April 17 3 PM EST and April 18th 1 PM EST</li>
        </ul>
      </Modal>

      <Modal
        isOpen={stage2Modal}
        onRequestClose={() => setStage2Modal(false)}
        contentLabel="Stage 2"
      >
        <strong><p>Stage 2</p></strong>
        <ul>
          <li>
            Each player will play against our MYSTERY player in creative mode,
            battle it out for first to 10 Elims
          </li>
          <li>Date April 18th, after the 7 rounds of custom lobby solo arenas</li>
        </ul>
      </Modal>

      <Modal
        isOpen={stage3Modal}
        onRequestClose={() => setStage3Modal(false)}
        contentLabel="Stage 3"
      >
        <strong><p>Stage 3</p></strong>
        <ul>
          <li>
            Top 2 players will play head to head in realistic
            PG for the grand prize of $1,000
          </li>
          <li>First to 7 Elims win by 2 is the winner</li>
        </ul>
      </Modal>

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
              <div
                onClick={() => setGrandFinaleModal(true)}
                onKeyPress={() => setGrandFinaleModal(true)}
                role="button"
                style={{ cursor: 'pointer' }}
                tabIndex={0}
              >
                <img
                  src="/images/layer3/retangulo.png"
                  alt="Series Grand Finale"
                  style={{ height: 'auto', maxWidth: '100%' }}
                />
              </div>
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
                    <div
                      onClick={() => setStage2Modal(true)}
                      onKeyPress={() => setStage2Modal(true)}
                      role="button"
                      style={{ cursor: 'pointer' }}
                      tabIndex={0}
                    >
                      <StageGridImg src="/images/layer3/stage-2.png" alt="Stage 2 - Click for details." />
                    </div>
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
                    <div
                      onClick={() => setStage3Modal(true)}
                      onKeyPress={() => setStage3Modal(true)}
                      role="button"
                      style={{ cursor: 'pointer' }}
                      tabIndex={0}
                    >
                      <StageGridImg src="/images/layer3/stage-3.png" alt="Stage 3 - Click for details." />
                    </div>
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
                    <div
                      onClick={() => setStage1Modal(true)}
                      onKeyPress={() => setStage1Modal(true)}
                      role="button"
                      style={{ cursor: 'pointer' }}
                      tabIndex={0}
                    >
                      <StageGridImg src="/images/layer3/stage-1.png" alt="Stage 1 - Click for details." />
                    </div>
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
                <Button onClick={() => setIsOpen(true)}>View full rules</Button>
              </PlacementBottom>
            </PlacementContainer>

          </PlacementRoot>
        </Wrapper>
      </Container>
    </Root>
  );
};

export default Layer3;
