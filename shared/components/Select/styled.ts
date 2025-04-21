'use client';
import CreatableSelect from 'react-select/creatable';

import { styled } from '@/styled-system/jsx';

export const ContSelectStyle = styled.div`
  position: relative;
  width: 100%;
  &[data-disabled='false']:hover {
    .select-input {
      border-color: var(--colors-blue);
    }
    label {
      color: var(--colors-blue);
    }
  }
  &[data-disabled='false']:focus-within {
    .select-input {
      border-color: var(--colors-blue);
      svg {
        transform: rotate(180deg);
      }
    }
    label {
      color: var(--colors-blue);
    }
  }
  > span {
    color: rgba(131, 131, 131, 1) !important;
  }
`;

export const Description = styled.span`
  color: #757575;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

export const ContLabelStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const SelectInputStyle = styled(CreatableSelect)`
  padding-top: 10px;
  min-height: 53px;
  .groupLabel {
    padding: 0;
    border-bottom: 1px solid rgba(225, 225, 225, 1);
  }
  .ContGroupHeadling {
    text-transform: initial;
    .groupLabel {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8;
      padding: 0px 0px 8px;
    }
  }
  .react-select__control {
    background-color: var(--colors-white);
    border: 1px solid var(--colors-grey20);
    border-radius: 15px;
    &[data-error='true'] {
      border-color: var(--colors-red);
    }
    &[data-disabled='true'] {
      background-color: var(--colors-grey5);
    }
  }
  .react-select__menu {
    background-color: var(--colors-white);
    border: 1px solid var(--colors-grey20);
    border-radius: 15px;
    max-height: 180px;
    overflow: auto;
    .react-select__option {
      border-bottom: 1px solid var(--colors-grey20);
      padding: 8px 16px;
      &:hover {
        background-color: var(--colors-grey10);
      }
    }
    .react-select__option:last-child {
      border-bottom: none;
    }
  }
`;

export const OptionTextStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContSingleValueStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const FormatGroupLabel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: var(--colors-grey20);
  color: var(--colors-grey60);
`;
