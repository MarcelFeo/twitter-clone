import React from 'react';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon ,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Marcel Féo</h1>
        <h1>@marcel_feo</h1>

        <p>
          <a href="https://www.rocketseat.com.br/">@Rocketseat</a> project
        </p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 05 de abril de 2004
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>49 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;