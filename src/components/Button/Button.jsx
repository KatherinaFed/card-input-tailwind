import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = () => {
  const { t } = useTranslation();
  return (
    <button
      type="submit"
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {t('button')}
    </button>
  );
};

export default Button;
