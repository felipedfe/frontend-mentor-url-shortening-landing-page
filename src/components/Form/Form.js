import React from 'react';
import Button from '../Button/Button';
import './form.css';

function Form(props) {
  const { setInputUrl, handleClick, submittedForm, inputUrl } = props;

  return (
    <form>
      <div className="form--bg-container">
        <input
          className={(submittedForm && !inputUrl.length) ? "input--not-allowed" : ""}
          type="text"
          placeholder="Shorten a link here"
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <div className="form--button-bg">
          <Button
            className="shorten-btn"
            handleClick={handleClick}
          >
            Shorten it!
          </Button>
        </div>
        <span
          className="error-msg"
        >
          {(submittedForm && !inputUrl.length) ? "please add a link" : ""}
        </span>
      </div>
    </form>
  )
}

export default Form;