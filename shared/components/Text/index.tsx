import { ElementType, ReactNode, CSSProperties } from 'react';

import { textStyles } from './textStyles';

interface TextProps {
  styleName?: keyof typeof textStyles;
  as?: ElementType;
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
  onClick?: () => void; 
}

export default function Text(props: Readonly<TextProps>) {
  const { styleName = 'Body Medium', as, children, color, style } = props;
  let Component = as;
  const textStyle = textStyles[styleName];

  // Si no se pasa el prop `as`, se asigna un elemento HTML predeterminado basado en `styleName`
  if (!Component) {
    if (styleName.startsWith('Heading 1')) Component = 'h1';
    else if (styleName.startsWith('Heading 2')) Component = 'h2';
    else if (styleName.startsWith('Heading 3')) Component = 'h3';
    else if (styleName.startsWith('Heading 4')) Component = 'h4';
    else if (styleName.startsWith('Heading 5')) Component = 'h5';
    else if (styleName.startsWith('Heading 6')) Component = 'h6';
    else if (styleName.startsWith('Caption')) Component = 'span';
    else Component = 'p';
  }

  return (
    <Component
      style={{
        ...textStyle,
        ...style,
        color: color || textStyle?.color || 'rgba(0, 0, 0, 1)', //color recibido, luego el del estilo, y finalmente negro
      }}
      onClick={props.onClick}
    >
      {children}
    </Component>
  );
}
