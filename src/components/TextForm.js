import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here ...")
    // text =  'abhishek' // this is the wrong way to set value 
    // setText('text is set here') // this is the write way to set value

    const handleonChange = ((event) => {
        let newText = event.target.value;
        setText(newText);
    });
    const handleonClick = (() => {
        let upText = text.toUpperCase();
        setText(upText);
    })
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleonChange} id="mytextBox" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleonClick}>Convert Into UpperCase</button>
            </div>
        </div>
    )
}


TextForm.propTypes = { heading: PropTypes.string.isRequired }

TextForm.defaultProps = {
    heading: 'Enter your heading here'
}
