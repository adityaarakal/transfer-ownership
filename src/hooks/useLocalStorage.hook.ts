import { useEffect, useState } from 'react';

export const useLocalStorage: <T, U>(
  key: T | string,
  value: U,
) => [U, (newValue: U) => void, () => void] = <T, U>(key: T | string, value: U) => {
  const [state, setState] = useState<U>(value);
  const localStorageData = localStorage.getItem(key as string);

  const setItem = (newValue: U) => {
    setState(newValue);
    localStorage.setItem(key as string, JSON.stringify(newValue));
  };

  const clearItem: () => void = () => {
    localStorage.removeItem(key as string);
  };

  useEffect(() => {
    if (localStorageData) setState(JSON.parse(localStorageData));
    else localStorage.setItem(key as string, JSON.stringify(value));
  }, []);

  return [state, setItem, clearItem];
};
