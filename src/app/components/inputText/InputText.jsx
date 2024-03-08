import React from 'react';
import style from './inputText.module.css';

function InputText(props) {
    const {title,index,inputType,answer,id,onBlurAnswer} = props;
    return (
        <div>
            <label key={index} className={`radiocontainer checkedlabel ${style.checkedlabel}`} id="label1">
                {answer}
                <input
                    onBlur={() => onBlurAnswer(answer, inputType, title)}
                    required
                    type={inputType}
                    name="quiz"
                    id={id}
                />
            </label>
        </div>
    );
}

export default InputText;