import { useEffect, useState } from 'react';

import { Droppable, DroppableProps } from 'react-beautiful-dnd';

// Wrapper to make react-beautiful-dnd compatible with React.StrictMode
export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to ensure the component is mounted before enabling
    const animation = requestAnimationFrame(() => setEnabled(true));

    // Cleanup function to cancel the animation frame and reset state on unmount
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []); // Empty dependency array ensures this effect runs only once after mount

  // Render null if not enabled yet to prevent issues during initial render phases
  if (!enabled) {
    return null;
  }

  // Render the original Droppable component once enabled
  return <Droppable {...props}>{children}</Droppable>;
};

export default StrictModeDroppable;
