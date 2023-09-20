import React, { useEffect } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useTranslation } from 'react-i18next';

const CardForm = ({ handleSend }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  const handleSubmitSend = (e) => {
    e.preventDefault();
    handleSend(true);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 m-4">
      <form className="space-y-6" onSubmit={handleSubmitSend}>
        <h5 className="text-xl font-medium text-gray-900">{t('headerText')}</h5>
        <Input name={t('firstName')} placeholder={t('firstName')} />
        <Input name={t('lastName')} placeholder={t('lastName')} />
        <Input name={'email'} placeholder={'Email'} />
        <Button />
      </form>
    </div>
  );
};

export default CardForm;
