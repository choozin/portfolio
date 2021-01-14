import React, { createContext, Component, ContextType } from 'react';

export const AuthContext = createContext({
    isAuthenticated: false,
});

class AuthContextProvider extends Component {
  state = {
      isAuthenticated: false,
  }

  toggleAuth = () => {
      this.setState({
          isAuthenticated: !this.state.isAuthenticated
      })
  }

  render() {
      return (
          <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
              {this.props.children}
          </AuthContext.Provider>
      );
  }
}

export default AuthContextProvider;