import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: "", num2: "" };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    const inputStr = e.currentTarget.value;
    const num1 = inputStr === "" ? "" : parseInt(inputStr);
    this.setState({ num1 });
  };
  
  setNum2(e) {
    const inputStr = e.currentTarget.value;
    const num2 = inputStr === "" ? "" : parseInt(inputStr);
    this.setState({ num2 });
  };

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divide(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  clear(e) {
    e.preventDefault();
    const num1 = "", num2 = "", result = 0;
    this.setState({ num1, num2, result })
  }

  render() {
    const { result, num1, num2 } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input type="text" onChange={e => this.setNum1(e)} value={num1} />
        <input type="text" onChange={e => this.setNum2(e)} value={num2} />
        <button onClick={e => this.clear(e)}>Clear</button>
        <br/>
        <button onClick={e => this.add(e)}>+</button>
        <button onClick={e => this.subtract(e)}>-</button>
        <button onClick={e => this.multiply(e)}>*</button>
        <button onClick={e => this.divide(e)}>/</button>
      </div>
    );
  }
}

export default Calculator;