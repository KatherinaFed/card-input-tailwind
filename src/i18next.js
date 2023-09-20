import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          headerText: 'Send your application',
          firstName: 'First name',
          lastName: 'Last name',
          button: 'Send',
          successMessage: 'Your application was successfully sent!'
        },
      },
      ru: {
        translation: {
          headerText: 'Оставить заявку',
          firstName: 'Имя',
          lastName: 'Фамилия',
          button: 'Отправить',
          successMessage: 'Ваша заявка была успешно отправлена!'
        },
      },
    },
  });

export default i18n;
