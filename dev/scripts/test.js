import React from 'react';
import ReactDOM from 'react-dom';

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
                //input values
                jokeIdea: '',
                jokeBeat: '',
            }]
            joke: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.addJoke = this.addJoke.bind(this);
    }
    componentDidMount() {
        const dbRef = firebase.database().ref();
        const itemsArray = [];
        dbRef.on("value", (firebaseData) => {

            const itemsData = firebaseData.val();

            for (let itemKey in itemsData) {
                itemsArray.push(itemsData[itemKey])
            }
            console.log(itemsArray)

            this.setState({
                jokeIdea: itemsArray
            });
        });
    }
    handleChange(e) {
        this.setState({
            //the actual thing that it is corrisponding on 
            [e.target.name]: e.target.value,

        })
    }
    addJoke(e) {
        e.preventDefault();
        //use this instead of push because it will trigger a rerender
        const jokeState = this.state.jokes;

        //this clears out dogs
        this.setState({
            jokes: jokeState,

        });
        const dbRef = firebase.database().ref();
        dbRef.push(jokeState);
        console.log(jokeState);
    }
    addJoke(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <form onSubmit={this.addJoke}>

                    <input type="text" name="jokeIdea" value={this.state.jokeIdea} onChange={this.handleChange} />

                    {/* <input type="text" name="jokeBeat" value={this.state.jokeBeat} onChange={this.handleChange} /> */}

                    <button>Submit</button>
                </form>
                <ul>
                    {this.state.jokes.map((joke, i) => {
                        return <JokeItem data={joke} key={`joke-${i}`} />
                    })}
                </ul>
                {/* <Footer /> */}

            </div>
        )
    }
}

//if you use it more than once make it a component 
// you can have state on other components that app can do it on modules
ReactDOM.render(<App />, document.getElementById('app'));
