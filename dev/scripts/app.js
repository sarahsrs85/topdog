import React from 'react';
import ReactDOM from 'react-dom';
import JokeItem from './JokeItem';
// import Header from './header';
// import Footer from './footer';


  // Initialize Firebase
const config = {
      apiKey: "AIzaSyA8Jyk3rSPY16DFf62W8CBDIouQCH6ZM_I",
			authDomain: "topdog-3ed37.firebaseapp.com",
			databaseURL: "https://topdog-3ed37.firebaseio.com",
			projectId: "topdog-3ed37",
			storageBucket: "topdog-3ed37.appspot.com",
			messagingSenderId: "829961190817"
};
    
firebase.initializeApp(config);


class App extends React.Component {
      constructor() {
        super();
        this.state = {
          jokes: [{
            jokeIdea: "test",
            jokeBeats: "",
            
          }],
          jokeIdea:"",
          jokeBeats:""
      }
      this.handleChange = this.handleChange.bind(this);
      this.addJoke = this.addJoke.bind(this);
      this.removeJoke = this.removeJoke.bind(this); 
    }
    handleChange(e) {
      console.log(e.target.value)
        //the target is the actual thing that the event occurs on
        this.setState({
          [e.target.name]: e.target.value
        //can be used for different inputs just make sure name prop makes
        //everytime it changes we update this
        });
    }
    addJoke(e) {
      e.preventDefault();

      const jokeState = Array.from(this.state.jokes);
      jokeState.push({
        jokeIdea: this.state.jokeIdea, 
        jokeBeats: this.state.jokeBeats,
      });
      
      this.setState({
        jokes: jokeState,
        jokeIdea: "",
        jokeBeats: "",
      });
    }
    removeJoke(index) {
      const  jokeState = Array.from(this.state.jokes);
      jokeState.splice(index,1);
      this.setState({
        jokes: jokeState
      });
    }
    render() {
      return (
        <div>
          <header>
            <h1>Jokes</h1>
          </header>
          <form onSubmit={this.addJoke}>
            <label htmlFor="jokeIdea">Joke Premise</label>
            <input type="text" name="jokeIdea" value={this.state.jokeIdea} onChange={this.handleChange} />
            <label htmlFor="jokeBeats">Beat</label>
            <input type="textarea" name="jokeBeats" value={this.state.jokeBeats} onChange={this.handleChange} />
            
            <button>Add Joke</button>
          </form>
          <ul>
            {this.state.jokes.map((joke, i) => {
                return (
                  <div>
                    <JokeItem data={joke} key={`joke-${i}`} remove={this.removeJoke} jokeIndex={i} />
                  </div>
                )
              console.log(data)
            })}
          </ul>
        </div>
      )
    }
}



//if you use it more than once make it a component 
// you can have state on other components that app can do it on modules
ReactDOM.render(<App />, document.getElementById('app'));
