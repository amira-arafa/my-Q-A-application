import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Questions extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          questions: null,
        };
      }

      async componentDidMount() {
        //get all data from backend 
        const questions = (await axios.get('https://jsonplaceholder.typicode.com/comments')).data;
        this.setState({
          questions,
        });
      }

    render(){
        return(
        //check if const questions has no value so keep loading if it has data map over it and display it
            <div className="row justify-content-center">
                {this.state.questions===null && <p>loading the questions...</p>}
                {this.state.questions&& this.state.questions.map(que=>(
                  /* the below link takes info of certain question to question component*/
                    <div className="card col-sm-2 p-1 m-1" key={que.id} >
                    <Link to={`/question/${que.id}`}>
                    <div className="card-body text-dark">
                      <h5 className="card-title">{que.name}</h5>
                      <p className="card-text">{que.body}</p>
                    </div>
                    </Link>
                  </div>

                )) }
            </div>
        );
    }
}

export default Questions;