import React from "react"
import Signup from "./Signup"

import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Home from "./Home"
import Dates from "./Dates"


function App() {
  return (
    
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" ,color: "black",backgroundColor: 'grey'}}
    >
      <div className="w-100" style={{ maxWidth: "flex",color:"black" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/home" component={Home} />
              <Route path="/Dates" component={Dates} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
