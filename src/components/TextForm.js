import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }
    
    const handleClear = () => {
        setText("");
        props.showAlert("Text Cleared", "success")
    }   
    
    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);
    }
    const handleCopy = () => {
        let textArea = document.getElementById("myBox");
        navigator.clipboard.writeText(textArea.value);
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspaces removed", "success")
    }
    const [text, setText] = useState('Sample Text');
    // text = "new text" // wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"rgba(33, 37, 41, 1)":"white", color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extraspaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p> Average reading time {0.008 * text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the TextArea to preview it here"}</p>
            </div>
        </>

    )
}
