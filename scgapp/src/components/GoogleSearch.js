import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import axios from 'axios';

class GoogleSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
    this.getlocation = this.getlocation.bind(this);
  }

  async getlocation(event) {
    event.preventDefault();
    const self = this;
    const url = 'http://localhost:61671/SCG/GooglePlaceSearch';
    await axios.get(url)
      .then(res => {
        const data = JSON.stringify(res.data);
        self.setState({ result: data });
      })
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Assignment 2</h1>
          <p className="lead">Please use “Place search|Place API(by Google)” for finding all restaurants in Bangsue</p>
          <hr className="my-2" />
          <p>{this.state.result}</p>
          <p className="lead">
            <Button color="primary" onClick={(event) => this.getlocation(event)} size="sm">GetLocation</Button>{' '}
            <Button color="primary" onClick={()=>this.setState({result:''})} size="sm">Clear</Button>{' '}
          </p>
        </Jumbotron>
      </div>
    );
  }

}

export default GoogleSearch;