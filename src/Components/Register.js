import React, { Component } from 'react';
import TextInput from './common/TextInput';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }


    onChangeHandler = (eve) => {
        this.setState({ [eve.target.name]: eve.target.value });
    }

    onSubmitHandler = (eve) => {
        eve.preventDefault();
        alert("submitted")
    }

    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>
                            <form onSubmit={this.onSubmitHandler}>
                                <TextInput
                                    name={"name"}
                                    value={this.state.name}
                                    delegateFunc={this.onChangeHandler}
                                    error={'error in name'}
                                    placeholder={"Name"}
                                />
                                <TextInput
                                    type={"email"}
                                    name={"email"}
                                    value={this.state.email}
                                    delegateFunc={this.onChangeHandler}
                                    error={'error in email'}
                                    placeholder={"Email Address"}
                                    info='This site uses Gravatar so if you want a profile image, use a Gravatar email'
                                />
                                <TextInput
                                    type={"password"}
                                    name={"password"}
                                    value={this.state.password}
                                    delegateFunc={this.onChangeHandler}
                                    error={'error in password'}
                                    placeholder={"Password"}
                                />
                                <TextInput
                                    type={"password"}
                                    name={"confirmPassword"}
                                    value={this.state.confirmPassword}
                                    delegateFunc={this.onChangeHandler}
                                    error={'error in confirmPassword'}
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






export default Register;