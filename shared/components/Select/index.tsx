'use client';

import { memo, useState } from 'react';
import { type ChangeHandler } from 'react-hook-form';
import {
  components,
  type DropdownIndicatorProps,
  type SingleValueProps,
  type OptionProps,
  type GroupHeadingProps,
} from 'react-select';

import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';
import Tooltip from '../TooltipBox';
import NuevaVariableSelect from '@/shared/containers/NuevaVariableSelect';
import {
  ContSelectStyle,
  ContLabelStyle,
  SelectInputStyle,
  OptionTextStyle,
  ContSingleValueStyle,
} from './styled';

interface SelectProps {
  name?: string;
  optionSelect?: {
    label?: string;
    value?: string | null;
  }[];
  label?: string;
  value?: string | null;
  defaultValue?: string | null;
  placeholder?: string;
  onChangeSelect?: (value: { value: string; label: string }) => void;
  onBlur?: ChangeHandler;
  onFocus?: ChangeHandler;
  hasErrors?: boolean;
  disabled?: boolean;
  titleGroup?: string;
  onClickHeadling?: () => void;
  tooltipData?: string;
  addNewVariable?: boolean;
  description?: string;
}

const Select = ({
  name,
  optionSelect = [],
  label,
  value,
  defaultValue,
  placeholder,
  onChangeSelect,
  onBlur,
  onFocus,
  hasErrors = false,
  disabled,
  titleGroup,
  onClickHeadling,
  tooltipData,
  addNewVariable = false,
  description,
}: SelectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localOptions, setLocalOptions] = useState(optionSelect);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddOption = (newValue: string) => {
    const newOption = {
      value: newValue.toLowerCase().replace(/\s+/g, '-'),
      label: newValue,
    };

    const updatedOptions = [...localOptions, newOption];
    setLocalOptions(updatedOptions);

    // Seleccionar automáticamente la nueva opción
    if (onChangeSelect) {
      onChangeSelect(newOption);
    }
  };

  const options = addNewVariable
    ? [{ value: 'new', label: '+ Nueva opción' }, ...localOptions]
    : localOptions;

  const handleChange = (selectedOption: any) => {
    if (selectedOption?.value === 'new') {
      handleOpenModal();
    } else if (onChangeSelect) {
      onChangeSelect(selectedOption);
    }
  };

  const DropdownIndicator = (propsIndicator: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...propsIndicator}>
        <Icon icon="chevron-down" color="rgba(81, 187, 81, 1)" size={16} />
      </components.DropdownIndicator>
    );
  };

  const SingleValue = (propsSingle: SingleValueProps) => {
    return (
      <components.SingleValue {...propsSingle}>
        <ContSingleValueStyle>
          <Text styleName="Content Accent">{propsSingle.children}</Text>
        </ContSingleValueStyle>
      </components.SingleValue>
    );
  };

  const GroupHeading = ({ children, ...restProps }: GroupHeadingProps) => {
    return (
      <components.GroupHeading {...restProps} className="ContGroupHeadling">
        <button type="button" className="groupLabel" onClick={onClickHeadling}>
          <Icon icon="plus" color="rgba(81, 187, 81, 1)" size={16} />
          <Text styleName="Caption Standard">Añadir Opción</Text>
        </button>
        <Text styleName="Caption Medium">{titleGroup?.toLowerCase()}</Text>
      </components.GroupHeading>
    );
  };

  const Option = (propsOption: OptionProps) => {
    return (
      <components.Option {...propsOption}>
        <OptionTextStyle>
          <Text styleName="Content Accent">{propsOption.children}</Text>
        </OptionTextStyle>
      </components.Option>
    );
  };

  return (
    <ContSelectStyle>
      {label && (
        <ContLabelStyle>
          <Text styleName="Content Accent">{label}</Text>
          {tooltipData && <Tooltip data={tooltipData} />}
        </ContLabelStyle>
      )}
      <SelectInputStyle
        name={name}
        options={options}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        isDisabled={disabled}
        components={{
          DropdownIndicator,
          SingleValue,
          Option,
          GroupHeading,
          IndicatorSeparator: null,
        }}
        className={hasErrors ? 'has-error' : ''}
      />
      {isModalOpen && (
        <NuevaVariableSelect
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAdd={handleAddOption}
        />
      )}
      {description && <Text styleName={'Caption Standard'}>{description}</Text>}
    </ContSelectStyle>
  );
};

export default memo(Select);
