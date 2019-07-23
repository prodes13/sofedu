import React, { Component } from 'react';
import {VarianteData} from './VarianteData';
import './Variante.css';

export default class Variante extends Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        quizEnd: false,
        score: 0,
        disabled: true
    }

    loadQuiz = () => {
        const { currentQuestion } = this.state;
        this.setState(() => {
            return {
                question: VarianteData[currentQuestion].question,
                options: VarianteData[currentQuestion].options,
                answer: VarianteData[currentQuestion].answer
            }
        });
    }

    componentDidMount() {
        this.loadQuiz();
    }

    nextQuestionHandler = () => {
        const { userAnswer, answer, score } = this.state;
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        });
        // score
        if( userAnswer === answer ) {
            this.setState({
                score: score+1
            });
        }
    }

    //update the component

    componentDidUpdate(prevProps, prevState) {
        const { currentQuestion } = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    question: VarianteData[currentQuestion].question,
                    options: VarianteData[currentQuestion].options,
                    answer: VarianteData[currentQuestion].answer
                }
            });
        }
    }
    //check answer
    checkAnswer = (option) => {
        this.setState({
            userAnswer: option,
            disabled: false
        });
    }

    finishHandler = () => {
        if(this.state.currentQuestion === VarianteData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
    }

    render() {
        const { question, options, currentQuestion, userAnswer, quizEnd } = this.state;

        if(quizEnd) {
            return (
                <div className="containerVariante">
                    <h2>
                        Game Over
                    </h2>
                    <p>Final score is {this.state.score} points.</p>
                    <p>The correct answer's for the questions was: </p>
                    <ul className="variante-ul">
                        {
                            VarianteData.map((item, index) => {
                                return(
                                <li className="ui floating message" key={index}>
                                    {item.answer}
                                </li>)
                            })
                        }
                    </ul>
                </div>
            )
        }

        return (
            <div className="containerVariante">
               <h2>{question}</h2>
               <span>
                   {`Questions ${currentQuestion + 1} out of ${VarianteData.length}`}
               </span>
               {options.map(option => (
                   <p key={option.id} 
                    onClick={() => this.checkAnswer(option)}
                   className={`ui floating message options
                    ${userAnswer === option ? "selected" : null}
                   `}>
                      { option }
                   </p>
               ))}
               { currentQuestion < VarianteData.length - 1 &&
                <button
                    disabled={this.state.disabled}
                    onClick={this.nextQuestionHandler}
                >Next</button>
               }
               { currentQuestion === VarianteData.length - 1 && 
                    <button 
                        onClick={this.finishHandler}    
                    >Finish</button>}
            </div>
        )
    }
}