import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;