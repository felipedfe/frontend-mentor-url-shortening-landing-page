import React, { useEffect, useState } from 'react';
import fetchApi from '../service/api';
import { getUrls, addUrls } from '../service/localStorage';
import Form from '../components/Form/Form'
import LinksCard from '../components/LinksCard/LinksCard';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction';
import Information from '../components/Information/Information';
import CallToAction from '../components/CallToAction/CallToAction';
import Footer from '../components/Footer/Footer';
import '../global-style/index.css';

function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [allUrls, setAllUrls] = useState([]);
  const [submittedForm, setSubmittedForm] = useState(false);
  const [isMenuDisabled, setIsMenuDisabled] = useState(
    window.innerWidth >= 1005 ? false : true
  )

  const menuClick = () => {
    if ((window.innerWidth >= 1005) && (isMenuDisabled)) {
      console.log(window.innerWidth)
      document.querySelector('.header--mobile-menu-btn').click();
    }
  };

  window.addEventListener('resize', menuClick);

  const handleClick = async () => {
    setSubmittedForm(true);
    console.log("click!")
    if (inputUrl.length) {
      const response = await fetchApi(inputUrl);
      if (response.message) {
        console.log(response.message);
      } else {
        const url = response.data.result.full_short_link;
        setShortenedUrl(url);
      };
      setSubmittedForm(false);
    };
  };

  const showNavigation = () => {
    setIsMenuDisabled((prevState) => !prevState)
  }

  useEffect(() => {
    const urls = getUrls();
    setAllUrls(urls);
  }, []);

  useEffect(() => {
    if (shortenedUrl) {
      const newUrls =
      {
        original: inputUrl,
        shortened: shortenedUrl
      }
      setAllUrls([...allUrls, newUrls]);
    }
  }, [shortenedUrl]);

  useEffect(() => {
    addUrls(allUrls)
  }, [allUrls]);

  return (
    <>
      <header className="header--container">
        <Header
          isMenuDisabled={isMenuDisabled}
          showNavigation={showNavigation}
        />
      </header>
      <main>
        <section className="introduction--container">
          <Introduction />
        </section>
        <div className="bg-wrapper">
          <div className="bg" />
          <section className="form--container">
            <Form
              setInputUrl={setInputUrl}
              handleClick={handleClick}
              submittedForm={submittedForm}
              inputUrl={inputUrl}
            />
          </section>
          <section className="links--container">
            {allUrls.map((url, index) => (
              <LinksCard
                key={index}
                url={url}
              />
            ))}
          </section>
          <section className="information--container">
            <Information />
          </section>
        </div>
        <section className="cta--container">
          <CallToAction />
        </section>
      </main >
      <footer className="footer--container">
        <Footer />
      </footer>
    </>
  )
};

export default App;

export const Head = () => <title>Shortly</title>
