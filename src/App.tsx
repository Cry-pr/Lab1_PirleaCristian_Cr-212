import React, { useState, useEffect } from "react";

const UserInitial = [
    { username: "a", password: "1" },
    { username: "b", password: "2" },
    { username: "c", password: "3" },
];

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [EsteLogat, setEsteLogat] = useState(false);
    const [users, SetareUser] = useState(UserInitial);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            SetareUser([...users, ...JSON.parse(storedUsers)]);
        }
    }, [users]);

    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const foundUser = users.find(
            (user) => user.username === username && user.password === password
        );
        if (foundUser) {
            setEsteLogat(true);
            localStorage.setItem("EsteLogat", "true");
            localStorage.setItem("user", JSON.stringify(foundUser));
            
        } else {
            alert("Login eșuat");
        }
    };
 

    const handleLogout = () => {
        setEsteLogat(false);
        localStorage.setItem("EsteLogat", "false");
        
    };

    const renderLoginForm = () => {
        return (

          
            <form onSubmit={handleLogin}>

<div className="center">
		<h1 >Log In</h1>
		
		  <div className="inputbox">
			<input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
			<span>Email</span>
		  </div>
		  <div className="inputbox">
      <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
			<span>Password</span>
		  </div>
		  <div className="button">
			<button className="btn" type="submit">submit</button>
		  </div>
		
	  </div>
    </form>
                
        );
    };

    const renderLogoutButton = () => {
        const storedUser = localStorage.getItem("user");
        const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
        return (
            <div>
                {loggedInUser && <p>User : {loggedInUser.username}</p>}
                <button className="btn" onClick={handleLogout}>Ieșire</button>
            </div>
        );
    };


    return <div>{EsteLogat ? renderLogoutButton() : renderLoginForm()}</div>;
};

export default App;