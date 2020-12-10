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

    setNumber = (event, number) => {
        event.preventDefault()
        this.setState({ [number]: event.target.value })
    }

    setOperator = (event) => {
        event.preventDefault()
        this.setState({ operator: event.target.value })
    }

    calculate = (event) => {
        event.preventDefault()
        const number1 = this.state.number1
        const number2 = this.state.number2
        const operator = this.state.operator
        const answer = this.state.answer
        if (operator !== '') {
            // let answer = 0
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
                // answer: answer
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <h1>Calculator</h1>
                <div className='add'>
                    <input
                        type='number'
                        name='number1'
                        placeholder='Enter your first number'
                        value={this.state.number1}
                        onChange={ (event) => 
                            this.setNumber(event, 'number1')
                        }
                    />
                    <select
                        name='operator'
                        onChange={this.setOperator}
                    >
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>
                    </select>
                    <input
                        type='number'
                        name='number2'
                        placeholder='Enter your second number'
                        value={this.state.number2}
                        onChange={ (event) => 
                            this.setNumber(event, 'number2')
                        }
                    />
                    <button onClick={this.calculate}>=</button>
                    <h3>{this.state.answer}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator