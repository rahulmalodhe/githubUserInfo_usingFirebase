import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//Route
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//Components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { userContext } from "./Context/userContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

//init firebase
import firebaseConfig from "./COnfig/firebaseConfig";
firebase.initializeApp(firebaseConfig);

const App = () => {
	const [user, setUser] = useState(null);
	return (
		<Router>
			<ToastContainer />
			<userContext.Provider value={{ user, setUser }}>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Signin" component={Signin} />
					<Route exact path="/Signup" component={Signup} />
					<Route exact path="*" component={PageNotFound} />
				</Switch>
				<Footer />
			</userContext.Provider>
		</Router>
	);
};

export default App;
