'use client';

import React from 'react';
import { filterContainerStyle } from './styled';
import InputText from '@/shared/components/InputText';
import Select from '@/shared/components/Select';
import { type ChangeHandler } from 'react-hook-form';

interface FilterConfig {
  id: string;
  type: 'text' | 'select';
  label: string;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  isBig?: boolean;
}

interface TableFiltersProps {
  filters: {
    [key: string]: string;
  };
  filterConfig: FilterConfig[];
  onFilterChange: (filter: string, value: string) => void;
}

const TableFilters: React.FC<TableFiltersProps> = ({
  filters,
  filterConfig,
  onFilterChange,
}) => {
  const renderFilter = (config: FilterConfig) => {
    const commonProps = {
      name: config.id,
      label: config.label,
      placeholder: config.placeholder,
    };

    if (config.type === 'select' && config.options) {
      return (
        <Select
          {...commonProps}
          value={filters[config.id]}
          optionSelect={config.options}
          onChangeSelect={selectedOption => {
            if (selectedOption) {
              onFilterChange(config.id, selectedOption.value);
            }
          }}
        />
      );
    }

    const handleChange: ChangeHandler = async e => {
      if (e && e.target) {
        onFilterChange(config.id, e.target.value);
      }
      return true;
    };

    return (
      <InputText
        {...commonProps}
        value={filters[config.id] || ''}
        onChange={handleChange}
      />
    );
  };

  return (
    <div
      style={{
        ...filterContainerStyle,
        width: '100%',
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      {filterConfig.map(config => (
        <div
          key={config.id}
          style={{ flex: config.isBig ? '1 1 100%' : '1 1 auto' }}
        >
          {renderFilter(config)}
        </div>
      ))}
    </div>
  );
};

export default TableFilters;
