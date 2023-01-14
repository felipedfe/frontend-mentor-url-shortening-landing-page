import React, { useRef } from 'react';
import './links-card.css'

function LinksCard(props) {
  const { url: { original, shortened } } = props;
  const buttonElement = useRef();

  const restoreButton = () => {
    const copyButton = buttonElement.current;
    copyButton.classList.remove("copied");
    copyButton.innerText = "Copy";
  }

  const copyLink = () => {
    navigator.clipboard.writeText(shortened);
    const copyButton = buttonElement.current;

    copyButton.classList.add("copied");
    copyButton.innerText = "Copied!";
    setTimeout(restoreButton, 1500)
  }

  // const restoreButton = () => {
  //   const copyButton = buttonElement.current;
  //   copyButton.classList.remove("copied");
  //   copyButton.innerText = "Copy";
  // }

  return (
    <div className="links-card--container">
      <p className="links-card--original-url">{original}</p>
      <div className="links-card--shortened-btn-wrapper">
        <p className="links-card--shortened-url">{shortened}</p>
        <button
          className="links-card--button"
          // onMouseLeave={restoreButton}
          ref={buttonElement}
          onClick={copyLink}
        >
          Copy
        </button>
      </div>
    </div>
  )
}

export default LinksCard;