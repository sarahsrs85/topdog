import React from 'react';
//dont need react dom anythere but the app cause that is where it is being rendered to DOm

class Donut extends React.Component {
    render() {
        return (
            <h2>{this.props.donutName}</h2>
        )
    }
}

export default donutName; 
//default cause it is the only one...can only have one default
//dont want to export a whole bunch of components in one module, do seperate modules 