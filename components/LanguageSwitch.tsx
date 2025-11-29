import React from 'react';
import { Language } from '../types';

interface LanguageSwitchProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ currentLang, onToggle }) => {
  const getStyle = (lang: Language) => `transition-colors duration-300 ${currentLang === lang ? 'text-white border-b border-white pb-0.5' : 'text-neutral-600 hover:text-neutral-400'}`;

  return (
    <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-medium">
      <button onClick={() => onToggle('pt')} className={getStyle('pt')}>PT</button>
      <span className="text-neutral-800">/</span>
      <button onClick={() => onToggle('en')} className={getStyle('en')}>EN</button>
      <span className="text-neutral-800">/</span>
      <button onClick={() => onToggle('ja')} className={getStyle('ja')}>JP</button>
    </div>
  );
};