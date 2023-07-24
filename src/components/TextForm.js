import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState("")
    // text =  'abhishek' // this is the wrong way to set value 
    // setText('text is set here') // this is the write way to set value

    const handleonChange = ((event) => {
        let newText = event.target.value;
        setText(newText);
    });
    const handleUpperonClick = (() => {
        let upText = text.toUpperCase();
        setText(upText);
    })
    const handleLoweronClick = (() => {
        let upText = text.toLowerCase();
        setText(upText);
    })

    const handleCopyonClick = (() => {
        let txt = document.getElementById('mytextBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
    })

    const handleRemoveSpaceonClick = (() => {
        let txt = text.split(/[ ]+/);
        setText(txt.join(" "))
    })
    return (
       <>
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3" value={text} onChange={handleonChange} id="mytextBox" rows="8"></textarea>
                <button className="btn btn-primary mx-1" onClick={handleUpperonClick}>Convert Into UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoweronClick}>Convert Into LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyonClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveSpaceonClick}>Remove Extra Space</button>
            </div>
        </div>

        <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split(' ').length -1} word and {text.length}</p>
            <p>{0.008* text.split(' ').length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter some text to preview'}</p>
        </div>
       </>
    )
}


TextForm.propTypes = { heading: PropTypes.string.isRequired }

TextForm.defaultProps = {
    heading: 'Enter your heading here'
}
