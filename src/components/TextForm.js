import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); // Value written inside useState() will be the default value of the text and setText will be the value of the text after it get's updated.

  const handleUpClick = () => {
    // console.log("UpperCase was clicked.");
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Text has been converted to UpperCase", "Success");
  };

  const handleLoClick = () => {
    // console.log("LowerCase was clicked.");
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Text has been converted to LowerCase", "Success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("Text has been cleared", "Success");
  };

  const handleCopy = () => {
    // let textarea = document.getElementById("myBox");
    // textarea.select();
    // navigator.clipboard.writeText(textarea.value);

    // We can use above 3 lines to copy text or simply this line because textarea.value is defined as {text} in this case.
    // This function is used to write the text into navigator's clipboard that is to copy the text to the clipboard.
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied to the clipboard", "Success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces have been removed from the text", "Success");
  };

  const handleOnChange = (event) => {
    // console.log("On change.");
    // console.log(text);
    setText(event.target.value);
  };

  // text = "New text"; // Wrong way to change the state.
  // setText("New Text"); // Correct way to change the state.
  return (
    <>
      <div className={`mb-3 container my-3 text-${props.mode==='light'?'dark':"light"}`}>
        <h1>{props.heading}</h1>

        <textarea
          value={text}
          placeholder="Enter Your Text Here : "
          onChange={handleOnChange}
          className={`form-control text-${props.mode==='light'?'dark':"light"} bg-${props.mode==='light'?'light':"dark"}`}
          id="myBox"
          rows="8"
        ></textarea>

        <button onClick={handleUpClick} className={`btn btn-${props.mode==='light'? "primary":"dark"} ${props.mode==='light'? "":"btn-outline-light"} my-3 mx-2`}>
          Convert to UpperCase
        </button>
        <button onClick={handleLoClick} className={`btn btn-${props.mode==='light'? "primary":"dark"} ${props.mode==='light'? "":"btn-outline-light"} my-3 mx-2`}>
          Convert to LowerCase
        </button>
        <button onClick={clearText} className={`btn btn-${props.mode==='light'? "primary":"dark"} ${props.mode==='light'? "":"btn-outline-light"} my-3 mx-2`}>
          Clear Text
        </button>
        <button onClick={handleCopy} className={`btn btn-${props.mode==='light'? "primary":"dark"} ${props.mode==='light'? "":"btn-outline-light"} my-3 mx-2`}>
          Copy Text
        </button>
        <button onClick={handleExtraSpaces} className={`btn btn-${props.mode==='light'? "primary":"dark"} ${props.mode==='light'? "":"btn-outline-light"} my-3 mx-2`}>
          Remove Extra Spaces
        </button>
      </div>

      <div className={`container text-${props.mode==='light'?'dark':"light"}`}>
        <h2>Your Text Summary</h2>
        <p>
          {/* {text[text.length-1]===' ' || text===""? text.split(" ").length-1 : text.split(" ").length} Words and {text.length} Characters */}

          {(text.split(/[ ]+/).join(' ')[text.split(/[ ]+/).join(' ').length-1]===' ' || text.split(/[ ]+/).join(' ')==="") ? text.split(/[ ]+/).join(' ').split(" ").length-1 : text.split(/[ ]+/).join(' ').split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * (text.split(/[ ]+/).join(' ')[text.split(/[ ]+/).join(' ').length-1]===' ' || text.split(/[ ]+/).join(' ')==="" ? text.split(/[ ]+/).join(' ').split(" ").length-1 : text.split(/[ ]+/).join(' ').split(" ").length)} minutes to read (approx)</p>

        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter your text in the textbox above to preview here."}</p>
      </div>
    </>
  );
}
