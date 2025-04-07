import { useState } from 'react';

export const useQuickAccessServices = (defaultIndex: number) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleNavigationClick = (index: number) => {
    setActiveIndex(index);
  };

  return { activeIndex, handleNavigationClick };
};
