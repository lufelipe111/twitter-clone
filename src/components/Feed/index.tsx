import React from 'react';
import Tweet from '../Tweet';

import { Container, Tweets } from './styles';
import { Tab } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />  
      </Tweets>
    </Container>
  );
}

export default Feed;