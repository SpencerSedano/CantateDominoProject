import React from "react";

// Component
import Navbar from "./components/Navbar";

//Styles
import "./styles/app.css";

//Importing Pages
import Inicio from "./pages/Inicio";
import Planes from "./pages/Planes";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	// const location = useLocation();
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Inicio />
					</Route>
					<Route path="/planes">
						<Planes />
					</Route>
					<Route path="/nosotros">
						<Nosotros />
					</Route>
					<Route path="/contacto">
						<Contacto />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
