import React, {Component} from "react";
import './style.scss'

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault();
        //then we make POST request with login and password and get token in cookies from server
    }


    render() {
        return (
            <div className="login-wrapper">
                <form>
                    <p>Login</p>
                    <input onChange={this.handleChange} type='text' name="login"/>
                    <p>Password</p>
                    <input onChange={this.handleChange} type='text' name="password"/>
                </form>
                <button onClick={this.handleSubmit}>Login</button>
            </div>
        )
    }
}

export default LoginComponent;