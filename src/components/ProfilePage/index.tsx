import React from 'react';

import { Container, EditButton ,Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Luiz Felipe Leal</h1>
        <h2>@DamoDiCopos</h2>

        <p>me da uma vaga</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 18 de Março de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>2398</strong>
          </span>
          <span>
            <strong>3294 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />

    </Container>
  );
}

export default ProfilePage;