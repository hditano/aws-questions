import { useEffect, useState } from 'react';
import data from '../database/data';

export const Question = () => {

    const [answer, setAnswer] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [scoreTotal, setScoreTotal] = useState([]);

    const nextQuestion = count + 1;

    const submitAnswer = (e) => {

        if(nextQuestion < data.length) {
            setCount(count + 1)
        } else {
            setShowScore(true)
        }

        if(answer === data[count].Answer) {
            setScoreTotal(scoreTotal.concat(true));            
        } else {
            setScoreTotal(scoreTotal.concat(false));
        }

        e.preventDefault();
        setTotal(total.concat(answer));
        setAnswer([]);

    }


    return (
        <div>
            {showScore ? <h1>Done!</h1> :
                (
                    <>
                        <h2>Question</h2>
                        <h3>{data[count].Question}</h3>
                        <form onSubmit={submitAnswer} onChange={(e) => setAnswer(e.target.value)}>
                        {data[count].Options.map((ele) => {
                            return (
                                    <li>
                                        <input type='radio' value={ele} name='options'/>
                                        <label>{ele}</label>
                                    </li>
                            )
                        })}
                        <button>Next</button>
                        </form>
                    </>
                )
            }
        </div>
    )
}