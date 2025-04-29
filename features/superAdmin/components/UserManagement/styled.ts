import { styled } from '@/styled-system/jsx';

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const IconContainer = styled.div`
  margin-right: 12px;
  color: #0066cc;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const SearchInput = styled.div`
  position: relative;
  width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #757575;
`;

export const SortContainer = styled.div`
  position: relative;
`;

export const SortSelect = styled.select`
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  appearance: none;
  background-color: white;
  min-width: 150px;
  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableHeader = styled.th`
  text-align: var(--textAlign, left);
  padding: 16px 12px;
  font-weight: 600;
  width: var(--width, auto);
  background-color: transparent;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const TableCell = styled.td`
  padding: 16px 12px;
  border-bottom: 1px solid #e0e0e0;
  vertical-align: middle;
  text-align: var(--textAlign, left);
  width: var(--width, auto);
  background-color: #ffffff;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  overflow: hidden;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #757575;
  padding: 4px;
  &:hover {
    color: #0066cc;
  }
`;

export const ToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  cursor: pointer;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--toggle-bg, #E0E0E0);
  transition: 0.3s;
  border-radius: 34px;
  box-shadow: var(--toggle-shadow, none);

  &:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
    transform: var(--toggle-transform, translateX(0));
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  
  &:hover {
    background-color: var(--toggle-hover-bg, #CCCCCC);
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const TableContainer = styled.div`
  max-height: 400px; 
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  
  & thead {
    position: sticky;
    top: 0;
    background-color: #f8f9fa;
    z-index: 1;
  }
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;