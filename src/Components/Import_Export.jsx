import React from "react";
import back from "../assets/back.png";
import flash from "../assets/flash.png";
import "../style/ImEx.css";
import { useNavigate } from "react-router-dom";
import tutorial from "../assets/tutorial.svg";

import home from "../assets/Home.png";
import settings from "../assets/Settings.png";
import market from "../assets/Cereal.png";
import cart from "../assets/Cart.png";
import farmer from "../assets/Farmer.png";
const Import_Export = () => {
	const navigate = useNavigate();
	return (
		<>
			<div>
				<div className="m">
					<div>
						<img src={back} onClick={() => navigate("/back")}></img>
					</div>
					<div className="b1">
						<button>
							<img src={tutorial} alt="" />
						</button>
					</div>
				</div>

				<div className="im">
					<div className="btn2">
						<button>Import</button>
						<button>Export</button>
					</div>
					<div className="info">
						<form>
							<input type="text" placeholder="From"></input>
							<input type="text" placeholder="To"></input>
							<br />
							<select>
								<option>Product 1</option>
								<option>Product 2</option>
								<option>Product 3</option>
								<option>Product 4</option>
								<option>Product 5</option>
							</select>
							<br />
							<input type="date" placeholder="Pickup Date"></input>
						</form>
					</div>
					<div className="detail">
						<div className="word">
							<h4>Estimated Total</h4>
							<br />
							<p>GST</p>
							<p>CGST</p>
							<p>Transport Fee</p>
							<p>Service Fee</p>
							<br />
							<h5>You Have to Pay</h5>
						</div>
						<div className="no">
							<h4>31,500.25</h4>
							<br />
							<p>100.0</p>
							<p>100.0</p>
							<p>100.0</p>
							<p>100.0</p>
							<br />
							<h3>31,900.25</h3>
						</div>
					</div>
					<div className="btnE">
						<button>
							Move items<img src={flash}></img>
						</button>
					</div>
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
export default Import_Export;
