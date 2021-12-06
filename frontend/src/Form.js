import React from 'react';
export default class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Metal Yoyos'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('You favourite type of Yoyo is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Which type of yoyo is your favourite?:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Metal Yoyos">Metal Yoyos?</option>
              <option value="Wooden Yoyos">Wooden Yoyos?</option>
              <option value="Plastic Yoyos">Plastic Yoyos?</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }