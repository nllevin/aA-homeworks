import React from "react";
import { Mutation } from "react-apollo";
import { REGISTER_USER } from "../graphql/mutations";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(cache, { data }) {
    console.log(data);
    cache.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  }

  render() {
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          console.log(data)
          const { token } = data.register;
          localStorage.setItem("auth-token", token);
        }}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(registerUser) => (
          <div>
            <h2>Sign up</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                registerUser({
                  variables: this.state
                })
              }}
            >
              <label>Name: 
                <input type="text" value={this.state.name} placeholder="Name" onChange={this.update("name")}/>
              </label>
              <label>Email: 
                <input type="email" value={this.state.email} placeholder="Email" onChange={this.update("email")}/>
              </label>
              <label>Password: 
                <input type="password" value={this.state.password} onChange={this.update("password")}/>
              </label>
              <button>Sign up</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Register;