import React from 'react';
import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon} from './styles';

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      
      {/* Faixa superior com nome do Profile */}
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Luiz Felipe Leal</strong>
          <span>999 tweets</span>
        </ProfileInfo>
      </Header>

      {/* Timeline */}
      {/* <ProfilePage /> */}

      {/* Menu inferior */}
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;