import React, { Component } from 'react'
import TextInput from './common/TextInput';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    onChangeHandler = (eve) => {
        this.setState({ [eve.target.name]: eve.target.value });
    }
    onSubmitHandler = (eve) => {
        eve.preventDefault();
        this.props.history.push('/dashboard');
    }
    render() {
      return (
          <div className="login">
              <div className="container">
                  <div className="row">
                      <div className="col-md-8 m-auto">
                          <h1 className="display-4 text-center">Log In</h1>
                          <p className="lead text-center">Sign in to your DevConnector account</p>
                          <form onSubmit={this.onSubmitHandler}>
                              <TextInput
                                  type={"email"}
                                  name={"email"}
                                  value={this.state.email}
                                  delegateFunc={this.onChangeHandler}
                                  error={"email not found"}
                                  placeholder={"Email Address"}
                              />
                              <TextInput
                                  type={"password"}
                                  name={"password"}
                                  value={this.state.password}
                                  delegateFunc={this.onChangeHandler}
                                  error={"Password Incorrect"}
                                  placeholder={"Password"}
                              />
                              <input type="submit" className="btn btn-info btn-block mt-4" />
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      ) 
    }
  
}
export default Login;