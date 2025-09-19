import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Tutor from "./Components/Tutor";
import "./style/App.css";
import Settings from "./Components/Settings";
import Payments from "./Components/Payments";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Import_Export from "./Components/Import_Export";
import Market from "./Components/Market";
import Farmer from "./Components/Farmer";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/farmer" element={<Farmer />} />
					<Route path="/payments" element={<Payments />} />
					<Route path="/market" element={<Market />} />
					<Route path="/import-export" element={<Import_Export />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/local" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/tutor" element={<Tutor />} />
					<Route path="/bulk" element={<Import_Export />} />
					<Route path="/back" element={<Home />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
