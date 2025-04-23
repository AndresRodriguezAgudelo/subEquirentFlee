import React, { useState } from 'react';

import Icon from '@/shared/containers/Icons';

interface TooltipProps {
  data: string;
}

const Tooltip: React.FC<TooltipProps> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* Icono o elemento que activa el tooltip */}
      <div
        style={{
          cursor: 'pointer',
        }}
      >
        <Icon size={16} icon="info" />
      </div>

      {/* Tooltip */}
      {isVisible && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            marginTop: '8px',
            backgroundColor: '#f7f7f7',
            color: '#4f4f4f',
            padding: '8px',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            whiteSpace: 'nowrap',
            zIndex: 10,
            opacity: isVisible ? 1 : 0, // Controla la opacidad
            transform: isVisible
              ? 'translate(-50%, 0)'
              : 'translate(-50%, -10px)', // Controla la posición
            transition: 'opacity 1s ease, transform 1s ease', // Transición gradual
          }}
        >
          {data}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
