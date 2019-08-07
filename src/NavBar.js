import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from './Auth';

function NavBar(props) {
    //this method to allow user to signout and then go to home page
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };
    return(
    //check if the user authenticated then signout btn and user name are displayed and if not sign in btn is displayed
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
            <Link className="navbar-brand p-3 col-sm-9" to="/">Go to Q&A section</Link>
            {!auth0Client.isAuthenticated() && <button className="btn btn-primary offset-2" onClick={auth0Client.signIn}> sign in </button>}
            {auth0Client.isAuthenticated()&&
                <div className="col">
                    <label className="text-white pt-2 pr-2 ">{auth0Client.getProfile().name}</label>
                    <button className="btn btn-primary" onClick={()=>{signOut()}}>sign out</button>
                </div>
            }
        </nav>
    );
}
export default withRouter(NavBar);