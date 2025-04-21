import React, { ReactNode } from 'react';

import { LoginWrapper, TextContainer, VideoBackground, LoginContainer, Logo } from './styled';

interface AuthContainerProps {
  children: ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  return (
    <div>
      <VideoBackground autoPlay loop muted playsInline>
        <source src='/videos/login.mp4' type='video/mp4' />
      </VideoBackground>

      <LoginWrapper>
        <TextContainer>
          <h1>Gestiona, controla y <br /> monitorea tu flota de manera <br /> inteligente y eficiente</h1>
        </TextContainer>
        <LoginContainer>
          <Logo src='/images/Logo_Equisoft.png' alt='Equisoft Fleet' />
          {children}
        </LoginContainer>
      </LoginWrapper>

    </div>
  );
}

export default AuthContainer;