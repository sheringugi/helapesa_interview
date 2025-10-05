import { useState } from "react";

const Greeting = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    if (!isLoggedIn) {
      return (
        <div className="card">
          <h3>Hello, Guest!</h3>
        </div>
      )
    }
    else{
        return (
          <div className="card">
            <h3>Hello, {username}!</h3>
          </div>
        )
    }       
    }

export default Greeting