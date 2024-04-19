import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}
  updateLettersCount = event => {
    this.setState({letterCount: event.target.value.length})
  }
  render() {
    const {letterCount} = this.state
    return (
      <div className="letters-calculator-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="letter-calculator-image"
          alt="letters calculator"
        />

        <div className="letter-calculator-txt-con">
          <h1 className="letter-calculator-heading">
            Calculate the Letters you enter
          </h1>
          <div>
            <label htmlFor="input" className="letter-calculator-label-text">
              Enter the phrase
            </label>
            <br />
            <input
              id="input"
              type="text"
              onChange={this.updateLettersCount}
              className="letter-calculator-input"
              placeholder="Enter the phrase" 
            />
          </div>

          <p className="letter-calculator-counter">
            No.of letters: {letterCount}
          </p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
