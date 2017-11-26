import React from 'react';


export default class JokeItem extends React.Component {
render() {
    return (
        <div className="joke-item card-1">
            <div className="title">
                <h2>
                {this.props.data.jokeIdea}
                </h2>
                <button className="delete" onClick={() => this.props.remove(this.props.data.key)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
            <p>
            {this.props.data.jokeBeats} 
            </p>
        </div>
        );
    }
};
