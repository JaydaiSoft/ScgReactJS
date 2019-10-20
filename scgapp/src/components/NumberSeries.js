import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import axios from 'axios';


class NumberSeries extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
    this.calculate = this.calculate.bind(this);
  }

  async calculate(event) {
    event.preventDefault();
    const self = this;
    const url = 'http://localhost:61671/SCG/GetNumberSeries';
    await axios.get(url)
      .then(res => {
        const data = res.data;
        self.setState({ result: data});
      })
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Assignment 1</h1>
          <p className="lead">X, 5, 9, 15, 23, Y, Z  - Please create a new function for finding X, Y, Z value ?</p>
          <hr className="my-2" />
          <p>{this.state.result}</p>
          <p className="lead">
            <Button color="primary" onClick={(event) => this.calculate(event)} size="sm">Calculate</Button>{' '}
            <Button color="primary" onClick={()=>this.setState({result:''})} size="sm">Clear</Button>{' '}
          </p>
        </Jumbotron>
      </div>
    );
  }
}


export default NumberSeries;