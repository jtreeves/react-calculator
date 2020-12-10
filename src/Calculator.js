import React, { Component } from 'react'

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            number1: '',
            number2: '',
            operator: '',
            answer: ''
        }
    }

    setNumber = (event) => {
        event.preventDefault()
        if (this.state.operator === '') {
            this.setState({ number1: parseInt(event.target.innerText) })
        } else {
            this.setState({ number2: parseInt(event.target.innerText) })
        }
        this.setState({ answer: parseInt(event.target.innerText) })
    }

    setOperator = (event) => {
        event.preventDefault()
        this.setState({ operator: event.target.innerText })
    }

    setAnswer = (event) => {
        event.preventDefault()
        const number1 = this.state.number1
        const number2 = this.state.number2
        const operator = this.state.operator
        if (operator !== '') {
            if (operator === '+') {
                this.setState({
                    answer: parseInt(number1) + parseInt(number2)
                })
            } else if (operator === '-') {
                this.setState({
                    answer: parseInt(number1) - parseInt(number2)
                })
            } else if (operator === '*') {
                this.setState({
                    answer: parseInt(number1) * parseInt(number2)
                })
            } else if (operator === '/') {
                this.setState({
                    answer: parseInt(number1) / parseInt(number2)
                })
            }
            this.setState({
                number1: '',
                number2: '',
                operator: '',
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <h1>Calculator</h1>
                <form>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        1
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        2
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        3
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        4
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        5
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        6
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        7
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        8
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        9
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setNumber(event)
                        }
                    >
                        0
                    </button>
                    
                    <button
                        onClick={ (event) =>
                            this.setOperator(event)
                        }
                    >
                        +
                    </button>
                    <button
                        onClick={ (event) =>
                            this.setOperator(event)
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={ (event) =>
                            this.setOperator(event)
                        }
                    >
                        *
                    </button>
                    <button
                        onClick={ (event) =>
                            this.setOperator(event)
                        }
                    >
                        /
                    </button>
                    <button
                        onClick={ (event) => 
                            this.setAnswer(event)
                        }
                    >
                        =
                    </button>
                </form>
                <h2>{this.state.answer}</h2>
            </div>
        )
    }
}

export default Calculator