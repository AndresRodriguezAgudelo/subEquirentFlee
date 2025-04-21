import { styled } from '@/styled-system/jsx';

export const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  overflow: hidden;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  flex: 1;  
  text-align: left;
  color: white;
  padding-left: 2rem; 
  h1 {
    font-size: 2.8rem;
    font-weight: bold;
  }
`;

export const LoginContainer = styled.div`
  width: 25vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #021625;  
  box-sizing: border-box;
  border-radius: 12px;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export const Logo = styled.img`
  width: 160px;
  margin: -1rem auto 1rem auto;
  display: block;
`;

export const LoginForm = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  height: 90%;
`;
