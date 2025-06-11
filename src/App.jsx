import { useTranslation } from 'react-i18next';
import './i18n.js';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
      

    <div>

      <header>
        <select id="language-select" onChange={changeLanguage} value={i18n.language}>
        <option value="uz">🇺🇿 Uzbek</option>
        <option value="en">🇺🇸 English</option>
      </select>
      </header>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <p>{t('longtext')}</p>
      <p>{t('gap')}</p>

      <label htmlFor="language-select">🌐 Select Language: </label>
      
    </div>
  );
}

export default App;
