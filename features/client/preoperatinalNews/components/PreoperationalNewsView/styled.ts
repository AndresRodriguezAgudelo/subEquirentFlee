import { styled } from '@/styled-system/jsx';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  height: auto;
`;

export const BotoneraPerfilContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  color: #012736;
  cursor: pointer;
  border-bottom: 1px solid rgba(1, 39, 54, 0.2);
  padding: 12px 24px;
  box-sizing: border-box;
`;

export const BotoneraHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProfileLabel = styled.span`
  font-size: 14px;
  opacity: 0.7;
`;

export const ProfileName = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(1, 39, 54, 0.1);
  box-sizing: border-box;
  width: 100%;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 0;
  transition: opacity 0.2s ease;
  color: #012736;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: white;
  border-radius: 8px;
  color: #012736;
  box-sizing: border-box;
  gap: 16px;
`;

export const TitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const ActivosVehiculosContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 24px;
  box-sizing: border-box;
  gap: 24px;
`;

export const SearchSection = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const ResultsSection = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: auto;
`;

export const EmptyMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 16px;
`;

export const AssetCard = styled.div`
  width: 100%;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  &:hover {
    border-color: #006a94;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  
  &[data-status='green'] {
    background-color: #34c759;
  }

  &[data-status='red'] {
    background-color: #ff3b30;
  }
`;

export const StatusText = styled.span`
  color: #012736;
  font-size: 14px;
`;

export const CardDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 24px;
`;

export const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DetailLabel = styled.span`
  color: #012736;
  font-size: 12px;
  font-weight: 700;
`;

export const DetailValue = styled.span`
  color: #012736;
  font-size: 14px;
`;

export const FormularioContainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #012736;
  border-radius: 8px;
  color: white;
  &:after {
    content: 'Contenedor Formulario';
  }
`;

export const NivelCombustibleContainer = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #012736;
  border-radius: 8px;
  color: white;
  &:after {
    content: 'Contenedor Nivel de Combustible';
  }
`;

export const ElementosInspeccionContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #012736;
  border-radius: 8px;
  color: white;
  &:after {
    content: 'Contenedor Elementos de Inspección';
  }
`;

export const DescripcionNovedadesContainer = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #012736;
  border-radius: 8px;
  color: white;
  &:after {
    content: 'Contenedor Descripción de Novedades';
  }
`;

export const BotonesFinalesContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #012736;
  border-radius: 8px;
  color: white;

`;