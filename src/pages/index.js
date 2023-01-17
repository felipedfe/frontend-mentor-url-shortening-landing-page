import React, { useEffect, useState } from 'react';
import fetchApi from '../service/api';
import { getStoredUrls, addUrlsToStorage } from '../service/localStorage';
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
  const [allUrls, setAllUrls] = useState([]);
  const [submittedForm, setSubmittedForm] = useState(false);

  // Função ativada no componente Form
  const handleClick = async () => {
    setSubmittedForm(true);
    if (inputUrl.length) {
      const response = await fetchApi(inputUrl);
      if (response.message) {
        console.log(response.message);
      } else {
        const url = response.data.result.full_short_link;
        const newUrls =
        {
          original: inputUrl,
          shortened: url
        }
        setAllUrls([...allUrls, newUrls])
      };
      setSubmittedForm(false);
    };
  };

  // As URLs são resgatadas do Local Storage assim que o componente é montado...
  useEffect(() => {
    const urls = getStoredUrls();
    setAllUrls(urls);
  }, []);

  //...e adicionadas assim que o estado da lista de URLs é modificada
  useEffect(() => {
    addUrlsToStorage(allUrls)
  }, [allUrls]);

  return (
    <>
      <Header />
      <main>
        <Introduction />
        <div className="bg-wrapper">
          <div className="bg" />
          <Form
            setInputUrl={setInputUrl}
            handleClick={handleClick}
            submittedForm={submittedForm}
            inputUrl={inputUrl}
          />
          <section className="links--container">
            {allUrls.map((url, index) => (
              <LinksCard
                key={index}
                url={url}
              />
            ))}
          </section>
          <Information />
        </div>
        <CallToAction />
      </main >
      <Footer />
    </>
  )
};

export default App;

export const Head = () => <title>Shortly</title>
