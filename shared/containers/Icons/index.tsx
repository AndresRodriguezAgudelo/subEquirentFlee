'use client';
import React from 'react';
import IcomoonReact from 'icomoon-react';

import iconSet from './selection.json';

const Icon: React.FC<{
  color?: string;
  size?: string | number;
  icon: string;
  className?: string;
  onClick?: () => void;
}> = props => {
  const { color, size = '100%', icon, className = '', onClick } = props;
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      onClick={onClick}
    />
  );
};

export default Icon;
