'use client'
import style from './allquze.module.css';
import { useState } from 'react';
import { quizeData } from '../../DummyData/DummyData';


export default function AllQuize() {
    const [activeQuize, setActiveQuize] = useState(0)
    const { answerOptions, title, inputType, id } = quizeData[activeQuize];
    const [userAnswer, setUserAnswer] = useState([]);


    function onBlurAnswer(answer, inputType, title) {
        if (userAnswer && inputType == 'checkbox') {
            setUserAnswer((prevState) => ({
                ...prevState,
                [title]: [...(prevState[title] || []), answer],
            }));
        } else if (userAnswer && inputType == 'radio') {
            setUserAnswer((prevState) => ({
                ...prevState,
                [title]: answer
            }));
        }
        else if (userAnswer && inputType == 'text') {
            setUserAnswer((prevState) => ({
                ...prevState,
                [title]: answer
            }));
        }
    }

    return (
        <>
            <div className={style.quizebox}>
                <h2 className={style.title}>{title}</h2>
                <h4 className={style.quizeInfo}>question {id}/{quizeData.length}</h4>
                <form className={style.form} style={inputType == 'text' ? { display: 'block' } : { display: 'grid' }}>
                    {inputType !== 'text' && (
                        answerOptions.map((answer, index) => (
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
                        ))
                    )}

                    {inputType == 'text' && (
                        <div style={{textAlign: 'center'}}>
                            <textarea
                                className={style.textinput}
                                onBlur={(event) => onBlurAnswer(event.target.value, 'text', title)}
                                name="quize"
                                id="label1"
                                maxlength="250"
                                >
                                
                            </textarea>
                        </div>
                    )}
                </form>

                <button className={style.nextBtn} onClick={() => {
                    if (activeQuize + 1 == quizeData.length) {
                        setActiveQuize(0);
                        console.log(userAnswer);
                    } else {
                        setActiveQuize(activeQuize + 1)
                    }
                }}>{activeQuize + 1 == quizeData.length ? 'submit' : 'next quize'}</button>
            </div>
        </>
    )
}

