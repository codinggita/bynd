import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/slices/uiSlice';
import { useEffect } from 'react';

export const useTheme = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.ui.themeMode);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(themeMode);
  }, [themeMode]);

  return {
    themeMode,
    isDark: themeMode === 'dark',
    toggleTheme: () => dispatch(toggleTheme())
  };
};
