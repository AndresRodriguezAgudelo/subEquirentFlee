import React, { useState } from 'react';
import Text from '../Text';
import Icon from '@/shared/containers/Icons';
import Tooltip from '../TooltipBox';

interface ToggleSwitchProps {
  option1: string;
  option2: string;
  title: string;
  tipData?: string;
  initialStatus?: 'option1' | 'option2';
  onChange?: (status: 'option1' | 'option2') => void;
}

export const SwitchInput: React.FC<ToggleSwitchProps> = ({
  option1,
  option2,
  title,
  tipData,
  initialStatus = 'option1',
  onChange,
}) => {
  const [status, setStatus] = useState<'option1' | 'option2'>(initialStatus);

  const handleSwitchChange = () => {
    const newStatus = status === 'option1' ? 'option2' : 'option1';
    setStatus(newStatus);
    if (onChange) {
      onChange(newStatus);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        height: 'fit-content',
        gap: '6px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 5px',
      }}
    >
      <div>
        <Text styleName={'Highligth Accent'} as={'label'}>
          {title}
        </Text>
        {tipData && (
          <>
            <span> </span>
            <Tooltip data={tipData} />
          </>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
          height: '42px',
          width: '100%',
          backgroundColor: '#efefef',
        }}
      >
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '40px',
            borderRadius: '20px',
            position: 'relative',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'background-color 0.3s',
          }}
          onClick={handleSwitchChange}
        >
          <div
            style={{
              display: 'flex',
              position: 'relative',
              zIndex: 2,
              width: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: status === 'option1' ? '#ffffff' : '#4f4f4f',
                transition: 'color 0.3s',
              }}
            >
              {option1}
            </span>
            <span
              style={{
                color: status === 'option2' ? '#ffffff' : '#4f4f4f',
                transition: 'color 0.3s',
              }}
            >
              {option2}
            </span>
          </div>
          <span
            style={{
              position: 'absolute',
              width: '35%',
              height: '36px',
              backgroundColor: '#0e5d9e',
              borderRadius: '40px',
              top: '2px',
              zIndex: 1,
              left: status === 'option1' ? '10%' : '53%',
              transition: 'left 0.3s, background-color 0.3s',
            }}
          />
        </label>
      </div>
    </div>
  );
};
