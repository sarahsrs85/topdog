import React from 'react';
import ReactDOM from 'react-dom';
import JokeItem from './JokeItem';
import Header from './header';
import Footer from './footer';


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
            jokeIdea: "",
            jokeBeats: "",
            
          }],
          jokeIdea:"",
          jokeBeats:""
      }
      this.handleChange = this.handleChange.bind(this);
      this.addJoke = this.addJoke.bind(this);
      this.removeJoke = this.removeJoke.bind(this); 
    }
    componentDidMount() {
      const dbRef = firebase.database().ref();
      
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
        dbRef.on("value", (firebaseData) => {
          const jokesArray = [];
          const jokesData = firebaseData.val();

          for (let jokeKey in jokesData) {
            jokesData[jokeKey].key = jokeKey;
            jokesArray.push(jokesData[jokeKey]);
          }
            this.setState({
              jokes: jokesArray
            })
          })
        }
        else {
          console.log("You are signed out")
        }
      })//closes on auth state change
    }//did mount
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
      //userItem in video
      const joke ={
        jokeIdea: this.state.jokeIdea, 
        jokeBeats: this.state.jokeBeats,
      };
      //jokestate  remove this line once pulling from firebase
      jokeState.push(joke);

      this.setState({
        jokeIdea: "",
        jokeBeats: "",
      });
      const dbRef = firebase.database().ref();
      dbRef.push(joke);
      console.log(joke);
    }
    removeJoke(index) { 
      const dbRef = firebase.database().ref(index);
      dbRef.remove();
    }
    render() {
      return (
        <div>
          <Header />

          <form className="addJoke" onSubmit={this.addJoke}>
            <label htmlFor="jokeIdea">Joke Premise</label>
            <input type="text" name="jokeIdea" value={this.state.jokeIdea} onChange={this.handleChange} />
            <label htmlFor="jokeBeats">Notes</label>
            <textarea name="jokeBeats" value={this.state.jokeBeats} onChange={this.handleChange} />
            
            <button>Add Joke</button>
          </form>
          <ul className="mainContent">
            {this.state.jokes.map((joke, i) => {
                return (
                    <JokeItem data={joke} key={joke.key} remove={this.removeJoke} jokeIndex={i} />
                )
              console.log(data)
            })}
          </ul>
          <Footer />
        </div>
      )
    }
}



//if you use it more than once make it a component 
// you can have state on other components that app can do it on modules
ReactDOM.render(<App />, document.getElementById('app'));
