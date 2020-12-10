import React, { Component } from 'react'

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    add = () => {
        const newCount = this.state.count + this.state.inputtedNumber
        this.setState({ count: newCount })
    }

    subtract = () => {
        const newCount = this.state.count - this.state.inputtedNumber
        this.setState({ count: newCount })
    }

    multiply = () => {
        const newCount = this.state.count * this.state.inputtedNumber
        this.setState({ count: newCount })
    }

    divide = () => {
        const newCount = this.state.count / this.state.inputtedNumber
        this.setState({ count: newCount })
    }

    changeInput = (event) => {
        const newValue = parseInt(event.target.value) || 0
        this.setState({ inputtedNumber: newValue })
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value})
    }

    render() {
        return (
            <div className='container'>
                <h1>Add with React!</h1>
                <div className='add'>
                    <input
                        type='number'
                        name='num1'
                        placeholder='Enter your first number'
                        value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input
                        type='number'
                        name='num2'
                        placeholder='Enter your second number'
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button>=</button>
                    <h3>Addition results go here!</h3>
                </div>
            </div>
        )
    }
}

export default Calculator