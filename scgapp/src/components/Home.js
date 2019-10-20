import React from "react";
import { Jumbotron, Button } from 'reactstrap';



class Home extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
              <Jumbotron>
                <h1 className="display-3">SCG Digital Office Homepage</h1>
                <p className="lead">Passion For Better</p>
              </Jumbotron>
            </div>
          );
    }
}

export default Home;