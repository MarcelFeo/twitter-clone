import React from 'react';

import { 
  Avatar,
  Body,
  CommentIcon,
  Container,
  Content,
  Description,
  Dot,
  Header,
  Icons,
  ImageContent,
  LikeIcon,
  Retweeted,
  RetweetIcon,
  RocketseatIcon,
  Status,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              111
            </Status>
            <Status>
              <RetweetIcon />
              222
            </Status>
            <Status>
              <LikeIcon />
              333
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;