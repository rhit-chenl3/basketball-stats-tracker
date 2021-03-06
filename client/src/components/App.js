import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import NewPlayer from "./NewPlayer";
import NewTeam from "./NewTeam";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import "../App.css";

function App() {
    const [user, setUser] = useState(null);
    
    // auto-login
    useEffect(() => {
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        }
        });
    }, []);

    return (
        <div className="App container py-3">
            
            <NavBar user={user} setUser={setUser}/>
            <Switch>
                <Route exact path="/">
                    <HomePage user={user}/>
                </Route>
                <Route exact path="/login">
                    <LoginPage onLogin={setUser}/>
                </Route>
                <Route exact path="/signup">
                    <SignUpPage onLogin={setUser}/>
                </Route>
                <Route exact path="/newteam">
                    <NewTeam user={user}/>
                </Route>
                <Route exact path="/newplayer">
                    <NewPlayer user={user}/>
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;