import { useTranslation } from 'react-i18next';
import './i18n.js' 

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <p>{t('longtext')}</p>

      <button onClick={() => changeLanguage('uz')}>🇺🇿 Uzbek</button>
      <button onClick={() => changeLanguage('en')}>🇺🇸 English</button>
    </div>
  );
}

export default App;
