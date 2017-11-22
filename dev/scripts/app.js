import React from 'react';
import ReactDOM from 'react-dom';
import Donut from './donut';
const donuts = [ 'Honey Dip', 'Sourcream Glazed', 'Boston Cream']

class App extends React.Component {
    render() {
      return (
        <div>
          {donuts.map(donut => {
            return (
              <Donut donutName={donut}/>
            )

          })}
        </div>
      )
    }
}
//if you use it more than once make it a component 
// you can have state on other components that app can do it on modules
ReactDOM.render(<App />, document.getElementById('app'));
