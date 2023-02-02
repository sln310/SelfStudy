import { useState } from "react";

export const Form = ({ onAddLang }) => {
  const [text, setText] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    onAddLang(text);
    // console.log(text);
  };

  return (
    <div>
      <h4>add new languages</h4>
      <form onSubmit={submitForm}>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
    </div>
  );
};
