import React from "react";
import weather from "../assets/weather.png";
import home from "../assets/Home.png";
import settings from "../assets/Settings.png";
import market from "../assets/Cereal.png";
import cart from "../assets/Cart.png";
import farmer from "../assets/Farmer.png";
import local from "../assets/Shop.png";
import bulk from "../assets/bulk.png";
import tutorial from "../assets/tutorial.svg";
import { useNavigate } from "react-router-dom";

import "../style/Market.css";
const Market = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="head">
				<div className="search">
					<input type="text" placeholder="Search Services" />
				</div>

				<div className="weather">
					<div>
						<img src={weather} alt="" />
					</div>
					<div>
						<h3>43°C</h3>
					</div>
				</div>
			</div>

			<div className="b1">
				<button>
					<img src={tutorial} alt="" />
				</button>
			</div>

			<div className="main-cont">
				<div className="item" onClick={() => navigate("/local")}>
					<img src={local} alt="" width={"40px"} />
					<h5>Local Marketplace</h5>
				</div>
				<div className="item" onClick={() => navigate("/bulk")}>
					<img src={bulk} alt="" width={"40px"} />
					<h5>
						bulk <br />
						Import/Export
					</h5>
				</div>
			</div>

			<div className="nav">
				<footer>
					<img src={home} alt="" onClick={() => navigate("/back")} />
					<img src={farmer} alt="" onClick={() => navigate("/farmer")} />
					<img src={market} alt="" onClick={() => navigate("/market")} />
					<img src={cart} alt="" onClick={() => navigate("/cart")} />
					<img src={settings} alt="" onClick={() => navigate("/settings")} />
				</footer>
			</div>
		</>
	);
};

export default Market;
