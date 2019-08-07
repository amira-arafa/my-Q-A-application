import React, {Component} from 'react';
import axios from 'axios';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
    };
  }

  async componentDidMount() {
    //question props are placed params which is sent in the url (the id from it) to get request from certain question 
    const { match: { params } } = this.props;
    //the const question has the data of certain question 
    const question = (await axios.get(`https://jsonplaceholder.typicode.com/comments/${params.questionId}`)).data;
    
    this.setState({
      question,
    });
  }

    render(){
        return(
        //check if the const question has no value so keep loading if has value display it
            <div>
                {this.state.question===null&&<p>loading...</p>}
                {this.state.question&& 
                     <div className="card  p-1 m-1 text-center" >
                    <div className="card-body text-dark">
                      <h5 className="card-title">{this.state.question.name}</h5>
                      <p className="card-text">{this.state.question.body}</p>
                    </div>
                  </div>
                }
            </div>
        );
    }
}


export default  Question;