import { useTranslation } from 'react-i18next';
import './i18n.js';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
      

    <>

      <header>
      <div className="container">
      <h1>Wishbone+Partners</h1>
      <ul>
        <li><a href="#">{t('Projects')}</a></li>
        <li><a href="#">{t('About')}</a></li>
        <li><a href="#">{t('News')}</a></li>
        <li><a href="#">{t('Team')}</a></li>
        <li><a href="#">{t('Contact')}</a></li>
        <li><select id="language-select" onChange={changeLanguage} value={i18n.language}>
        <option value="uz">🇺🇿 Uzbek</option>
        <option value="en">🇺🇸 English</option>
      </select></li>
      </ul>

      
      </div>
      </header>
      <main>
        <div className="container">
          <div className="left">
          <h3>Wishbone+Partners</h3>
          <h1>The home of beautiful architecture.</h1>
          <p>{t('main-longtext')}</p>
          <button>Read More</button>
          </div>

          <div className="hero-img">
         <img src="https://i.ibb.co/yF1731CL/IMAGE.png" />
        </div>
        </div>
        
      </main>
                
    </>
  );
}

export default App;
