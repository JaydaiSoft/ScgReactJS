import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import axios from 'axios';

class LineNotify extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
    this.lineposting = this.lineposting.bind(this);
  }

  async lineposting(event) {
    event.preventDefault();
    const self = this;
    const url = 'http://localhost:61671/SCG/RestaurantsNotify';
    await axios.post(url)
      .then(res => {
        const data = JSON.stringify(res.data);
        self.setState({ result: data });
      })
  }

  render(){
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">LineNotify</h1>
          <p className="lead">Please create one small project for Line messaging API(Up to you)</p>
          <hr className="my-2" />
          <p>{this.state.result}</p>
          <p className="lead">
            <Button color="primary" onClick={(event) => this.lineposting(event)} size="sm">LinePushing</Button>{' '}
            <Button color="primary" onClick={()=>this.setState({result:''})} size="sm">Clear</Button>{' '}
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default LineNotify;