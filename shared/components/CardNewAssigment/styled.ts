import { styled } from '@/styled-system/jsx';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Card = styled.div`
  width: 350px;
  height: 230px;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  flex-direction: column;
  border: 1px solid #ddd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  margin: 0px 0px 0px 25px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 16px;
  border-bottom: 1px solid #e0e0e0;
  min-height: 40px;

  & > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderText = styled.span`
  font-size: 14px;
  color: #011726;
  text-align: center;
  font-weight: 500;
`;

export const HeaderTextWhite = styled(HeaderText)`
  color: #ffffff !important;
  font-weight: 600;
`;

export const SelectedTextContainer = styled.div`
  padding: 4px 12px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
`;

export const TitleText = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #011726;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ChartContainer = styled.div`
  position: relative;
  width: 41px;
  height: 41px;
`;

export const DynamicChartWrapper = styled.div`
  position: absolute;
  top: -30px;
  left: -30px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: absolute;
  top: 52%;
  left: 52%;
  transform: translate(-50%, -50%);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountdownContainer = styled.div`
  background-color: #f2f6fa;
  border-radius: 10px;
  padding: 0 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  padding: 0 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DetailText = styled.span`
  font-size: 13px;
`;

export const VencimientoHeader = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const VencimientoText = styled.span`
  font-size: 14px;
  color: #011726;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;

export const ButtonTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #011726;
  margin-bottom: 16px;
  text-align: center;
`;
