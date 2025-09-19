import React from "react";
import Farmerq from "../assets/Farmer.png";
import Male from "../assets/profile.png";
import loco from "../assets/Location.png";
import msg from "../assets/Chat.png";
import "../style/Farmer.css";
import tutorial from "../assets/tutorial.svg";
import { useNavigate } from "react-router-dom";
import home from "../assets/Home.png";
import settings from "../assets/Settings.png";
import market from "../assets/Cereal.png";
import cart from "../assets/Cart.png";
import farmer from "../assets/Farmer.png";
const Farmer = () => {
	const navigate = useNavigate();
	return (
		<div className="d">
			<img className="imgs" src={Farmerq}></img>
			<div className="b1">
				<button>
					<img src={tutorial} alt="" />
				</button>
			</div>

			<div className="far">
				<div className="pro">
					<img className="imgs" src={Male}></img>
				</div>
				<div className="about">
					<p>Farmer Name</p>
					<div className="ab">
						<img src={loco}></img>
						<div className="ab1">
							<h4>Coimbatore</h4>
							<br />
							<p>Primary: Coconut</p>
						</div>
					</div>
				</div>
				<div className="btn">
					<button>
						<img src={msg}></img> Message
					</button>
				</div>
			</div>

			<div className="far">
				<div className="pro">
					<img className="imgs" src={Male}></img>
				</div>
				<div className="about">
					<p>Farmer Name</p>
					<div className="ab">
						<img src={loco}></img>
						<div className="ab1">
							<h4>Coimbatore</h4>
							<br />
							<p>Primary: Coconut</p>
						</div>
					</div>
				</div>
				<div className="btn">
					<button>
						<img src={msg}></img> Message
					</button>
				</div>
			</div>
			<div className="far">
				<div className="pro">
					<img className="imgs" src={Male}></img>
				</div>
				<div className="about">
					<p>Farmer Name</p>
					<div className="ab">
						<img src={loco}></img>
						<div className="ab1">
							<h4>Coimbatore</h4>
							<br />
							<p>Primary: Coconut</p>
						</div>
					</div>
				</div>
				<div className="btn">
					<button>
						<img src={msg}></img> Message
					</button>
				</div>
			</div>
			<div className="far">
				<div className="pro">
					<img className="imgs" src={Male}></img>
				</div>
				<div className="about">
					<p>Farmer Name</p>
					<div className="ab">
						<img src={loco}></img>
						<div className="ab1">
							<h4>Coimbatore</h4>
							<br />
							<p>Primary: Coconut</p>
						</div>
					</div>
				</div>
				<div className="btn">
					<button>
						<img src={msg}></img> Message
					</button>
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
		</div>
	);
};

export default Farmer;
