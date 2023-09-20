import React from 'react';
import { useTranslation } from 'react-i18next';

const SentForm = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-sm box-border h-80 p-4 text-green-600 border border-green-800 rounded-lg shadow sm:p-6 md:p-8 m-4">
      {t('successMessage')}
    </div>
  );
};

export default SentForm;
