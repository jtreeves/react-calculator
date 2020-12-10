import React, { Component } from 'react'

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            number1: '',
            number2: '',
            answer: '',
            operator: ''
        }
    }

    setNumber = (event, number) => {
        this.setState({ [number]: event.target.value })
    }

    setOperator = (event) => {
        this.setState({ operator: event.target.value })
    }

    calculate = () => {
        const number1 = this.state.number1
        const number2 = this.state.number2
        if (this.state.operator === '+') {
            this.setState({
                answer: parseInt(number1) + parseInt(number2)
            })
        } else if (this.state.operator === '-') {
            this.setState({
                answer: parseInt(number1) - parseInt(number2)
            })
        } else if (this.state.operator === '*') {
            this.setState({
                answer: parseInt(number1) * parseInt(number2)
            })
        } else if (this.state.operator === '/') {
            this.setState({
                answer: parseInt(number1) / parseInt(number2)
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