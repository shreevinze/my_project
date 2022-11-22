import React, { useState } from "react";

export default function TextForm(props) {
  const noOfWords = () => {
    let wordList = text.split(" ");
    let j = 0;
    for (let words in wordList) {
      if (wordList[words][0]) {
        j++;
      }
    }

    return j;
  };

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };

  const captureEmail = () => {
    const myArray = text.split(" ");
    for (let i = 0; i < myArray.length; i++) {
      for (let j = 0; j < myArray[i].length; j++) {
        if (myArray[i][j] === "@") {
          emailCheck("Email found!");
          return true;
        }
      }
    }
    emailCheck("Email not found!");
  };

  const [text, setText] = useState("");
  const [emailFound, emailCheck] = useState("");
  // setText('New text');
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} - </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.bgColor,
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={captureEmail}>
          Email Check
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {noOfWords(text)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes needed to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
        <h2>Email Found</h2>
        <p>{emailFound}</p>
      </div>
    </>
  );
}
