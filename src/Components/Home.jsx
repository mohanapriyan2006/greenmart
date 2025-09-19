import React from "react";
import "../style/Home.css";
import search from "../assets/Search.png";
import weather from "../assets/weather.png";
import profile from "../assets/profile.png";
import star from "../assets/star.png";
import Chat from "../assets/Chat.png";
import home from "../assets/Home.png";
import settings from "../assets/Settings.png";
import market from "../assets/Cereal.png";
import cart from "../assets/Cart.png";
import farmer from "../assets/Farmer.png";

import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="home">
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

				<div className="scheme">
					<h2>agri scheme here</h2>
				</div>

				<h2 className="title">Recommended</h2>
				<div className="recommend">
					<div className="items"></div>
				</div>
				<h2 className="title">Nearby Shops</h2>
				<div className="shop-cont">
					<div className="shops">
						<div className="shop-img"></div>
						<h5>Shop name</h5>
						<img src={star} alt="" width={"35px"} />
						<span>(187)</span>
					</div>
					<div className="shops">
						<div className="shop-img"></div>
						<h5>Shop name</h5>
						<img src={star} alt="" width={"35px"} />
						<span>(187)</span>
					</div>
					<div className="shops">
						<div className="shop-img"></div>
						<h5>Shop name</h5>
						<img src={star} alt="" width={"35px"} />
						<span>(187)</span>
					</div>
				</div>
				<h2 className="title">Nearby Farmers</h2>
				<div className="farm-list">
					<div className="farmer-cont">
						<div className="farm">
							<div>
								<img src={profile} alt="" width={"40px"} className="prof" />
							</div>
							<div>
								<h4>Farmer Name</h4>
								<p>Coimbatore</p>
								<button>
									<img src={Chat} alt="" width={"9px"} />
									Message
								</button>
							</div>
						</div>
					</div>
					<div className="farmer-cont">
						<div className="farm">
							<div>
								<img src={profile} alt="" width={"40px"} className="prof" />
							</div>
							<div>
								<h4>Farmer Name</h4>
								<p>Coimbatore</p>
								<button>
									<img src={Chat} alt="" width={"9px"} />
									Message
								</button>
							</div>
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
			</div>
		</>
	);
};

export default Home;
