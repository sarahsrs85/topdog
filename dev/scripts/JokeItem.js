import React from 'react';


export default class JokeItem extends React.Component {
render() {
    return (
        <div className="joke-item">
        <h2>{this.props.data.jokeIdea} <button onClick={() => this.props.remove(this.props.jokeIndex)}>X</button>
        </h2>
        
            <li>
            {this.props.data.jokeBeats} 
            </li>
           
        
        </div>
        );
    }
};
