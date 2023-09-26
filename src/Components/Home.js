import React, {useState} from 'react'

export default function Home() {
    const [text,setText] = useState("");
  const converterBtnUpper = ()=>{
    // console.log(text)
    let mytext = text.toUpperCase();
    setText(mytext)
  }
  const converterBtnLower = ()=>{
    // console.log(text)
    let mytext = text.toLowerCase();
    setText(mytext)
  }
  const handleChangement = (event)=>{
    // console.log(text)
    setText(event.target.value)
  }
  const clearAll = ()=>{
    // console.log(text)
    setText("")
  }
  const checkWords = (text)=>{
    let newstr = "";
    console.log(text.split(" "));
    text.split(" ").forEach(element => {

      if(element){

        newstr = newstr + " " + element.trim();
      }
    });
    return newstr.split(" ").length-1;
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };
  const handleClipboard = ()=>{
    // navigator.clipboard.writeText(text)
    // Attempt to paste text from the clipboard
    navigator.clipboard.readText()
    .then(pastedText => {
        // Check if there's text in the clipboard
        if (pastedText) {
          let prevstr = text;
            setText(prevstr + pastedText)// = pastedText;
            // alert('Text pasted from clipboard: ' + pastedText);
        } else {
            alert('No text found in clipboard.');
        }
    })
    .catch(error => {
        console.error('Error pasting from clipboard:', error);
    });
  }
  return (
    <div>
        <div className="container">
            <h3 className='my-4'>Enter your text here-</h3>
            <div className="mb-3">
            <textarea className="form-control" id="textArea" rows="6" value={text} onChange={handleChangement} placeholder='Enter your text here'></textarea></div>
            <button className='btn btn-primary mx-2' onClick={converterBtnUpper} >Covert to Uppercase</button>
            <button className='btn btn-success mx-2' onClick={converterBtnLower} >Covert to Lowercase</button>
            <button className='btn btn-danger mx-2' onClick={clearAll} >Clear All</button>
            <button className='btn btn-primary mx-2' onClick={handleCapitalizeWordClick} >Capitalize Words</button>
            <button className='btn btn-success mx-2' onClick={handleClipboard} >Copy</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            <h4 className='my-3'>Your Text Summary</h4>
            <p>{checkWords(text)} words, {text.length} characters</p>
        </div>

    </div>
  )
}
