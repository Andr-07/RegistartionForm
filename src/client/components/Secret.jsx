import React from 'react';

class Secret extends React.Component {
    render() {
        return (
             <div className="jumbotron text-center">
             <h2>Hello {this.props.name}</h2>
             <h3> This page is full of secrets!</h3>
             
             </div>
        );
    }
}


export default Secret;