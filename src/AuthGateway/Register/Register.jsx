import React, {Component} from 'react';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            username: null,
            password: null
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
    }
    render(){
        return(
            <div>
                <button onClick={this.props.toggleLogin}>Login Instead</button>
                <form onSubmit={this.handleSubmit}>
                    Username: <input type="text" name="username" onChange={this.handleChange}></input>
                    Password: <input type="password" name="password" onChange={this.handleChange}></input>
                    <input type="submit" value="Register"></input>
                </form>
            </div>
        )
    }
}

export default Register;