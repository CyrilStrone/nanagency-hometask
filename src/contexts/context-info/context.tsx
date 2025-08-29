import { createContext, FC, useContext, useEffect, useState } from 'react';

import { useLanguage } from '../context-language';
import { InfoContextProps, ProviderInfoProps } from '.';

const InfoContext = createContext<InfoContextProps | null>(null);

export const useInfo = () => {
  const context = useContext(InfoContext);
  if (!context) {
    throw new Error('useInfo must be used within an ProviderInfo');
  }
  return context;
};

export const ProviderInfo: FC<ProviderInfoProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<Omit<InfoContextProps, 'onChange' | 'isLoading'>>({
    currency: null,
    language: null,
  });
  const { changeLng } = useLanguage();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setValue({ currency: '₽', language: 'rus' });
      setIsLoading(false);
    }, 1500);
  }, []);

  const onChange = (newValue: Partial<InfoContextProps>) => {
    setValue((oldValue) => ({ ...oldValue, ...newValue }));
    if (newValue.language && newValue.language !== value.language) changeLng(newValue.language);
  };
  return <InfoContext.Provider value={{ ...value, onChange, isLoading }}>{props.children}</InfoContext.Provider>;
};
