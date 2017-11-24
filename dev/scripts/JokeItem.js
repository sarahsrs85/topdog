import React from 'react';


export default class JokeItem extends React.Component {
render() {
    return (
        <div className="joke-item">
        <h2>{this.props.data.jokeIdea}</h2>
        <button onClick={() => this.props.remove(this.props.data.key)}>X</button>
        
            <li>
            {this.props.data.jokeBeats} 
            </li>
        </div>
        );
    }
};
