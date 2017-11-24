import React from 'react';


export default function JokeItem(props) {
        return (
            <li className="joke-item">{props.data.jokeIdea} <button onClick={() =>  props.remove(props.jokeIndex)}>X</button> </li>
            // <li >{this.props.data.bio}</li>
        )
    }
