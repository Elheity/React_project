import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Home from "./Home"
import Dates from "./Dates"
import { black } from "material-ui/styles/colors"


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div style={{
      padding:"20px",
      backgroundColor:"black"
    }}>
      <Card style={{
        padding:"20px",
        backgroundColor:"white"
      }}>
        <Card.Body >
        <Card>
            <Card.Body>
             <Link to="/Home" className="btn btn-primary w-100 mt-3" style={{backgroundColor:"black"}}>
                 Home
              </Link>
            </Card.Body>
          </Card>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong style={{color:"black"}}>Email:</strong> {currentUser.email}
          
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3"style={{backgroundColor:"black"}}>
            Update Profile
          </Link>
          <Link onClick={handleLogout} to="/login" className="btn btn-primary w-100 mt-3" style={{backgroundColor:"black"}}>
                 logout
          </Link>
          
        </Card.Body>
      </Card>
      
      <div className=" btn btn-primary   justify-content-center text-center mt-2  " style={{backgroundColor : "black"}}>
        <Button variant="link" onClick={handleLogout} style={{}}>
          Log Out
        </Button>
      </div>
      
    </div>
  )
}
