import { useState, useEffect } from 'react';
import Text from '@/shared/components/Text';
import Tooltip from '@/shared/components/TooltipBox';
import Checkbox from '@/shared/components/InputCheckBox';
import { Container, TitleContainer, CheckboxContainer } from './styled';

interface CheckBoxGroupProps {
  title?: string;
  tooltipData?: string;
  description?: string;
  headers: string[];
  multicheck?: boolean;
  onChange?: (selectedItems: string[]) => void;
}

const CheckBoxGroup = ({
  title,
  tooltipData,
  description,
  headers,
  multicheck = false,
  onChange,
}: CheckBoxGroupProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    let newSelectedItems: string[];

    if (multicheck) {
      // Si multicheck está habilitado, permite múltiples selecciones
      if (selectedItems.includes(value)) {
        newSelectedItems = selectedItems.filter(item => item !== value);
      } else {
        newSelectedItems = [...selectedItems, value];
      }
    } else {
      // Si multicheck está deshabilitado, solo permite una selección
      newSelectedItems = selectedItems.includes(value) ? [] : [value];
    }

    setSelectedItems(newSelectedItems);
    onChange?.(newSelectedItems);
  };

  return (
    <Container>
      {title && (
        <TitleContainer>
          <Text styleName="Content Accent">{title}</Text>
          {tooltipData && <Tooltip data={tooltipData} />}
        </TitleContainer>
      )}

      <CheckboxContainer>
        {headers.map(header => (
          <Checkbox
            key={header}
            name={header}
            options={[{ label: header, value: header }]}
            value={selectedItems.includes(header) ? header : ''}
            onChange={async () => {
              handleCheckboxChange(header);
              return true;
            }}
          />
        ))}
      </CheckboxContainer>

      {description && <Text styleName="Caption Standard">{description}</Text>}
    </Container>
  );
};

export default CheckBoxGroup;
