import React, { useEffect } from 'react';

import { DEFAULT_THEME } from '../src/themes';

import '../src/style/tailwind.css';

export const withTheme = (Story: React.FC, context: Record<string, any>) => {
  const { theme: themeKey = DEFAULT_THEME } = context.globals;

  useEffect(() => {
    const htmlTag = document.documentElement;

    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute('data-mode', themeKey);
  }, [themeKey]);

  return (
    <div className='p-8'>
      <Story />
    </div>
  );
};
