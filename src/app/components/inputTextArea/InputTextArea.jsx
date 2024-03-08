import React from 'react';
import style from './inputTextArea.module.css';

function InputTextArea(props) {
    const {onBlurAnswer, title} = props;
    return (
        <div style={{ textAlign: 'center' }}>
            <textarea
                className={style.textinput}
                onBlur={(event) => onBlurAnswer(event.target.value, 'text', title)}
                name="quize"
                id="inputtext"
                maxlength="250"
            >
            </textarea>
        </div>
    )
}

export default InputTextArea;