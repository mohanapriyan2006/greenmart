import React from "react";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.png";
import tutorial from "../assets/tutorial.svg";
import home from "../assets/Home.png";
import settings from "../assets/Settings.png";
import market from "../assets/Cereal.png";
import cart from "../assets/Cart.png";
import farmer from "../assets/Farmer.png";
const Products = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="m">
				<div onClick={() => navigate("/back")}>
					<img src={back}></img>
				</div>
				<div className="b1">
					<button>
						<img src={tutorial} alt="" />
					</button>
				</div>
			</div>

			<h2 className="title">Popular in Coimbatore</h2>
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

			<h2 className="title">Buy Again</h2>
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

			<h2 className="title">Bestsellers</h2>
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

			<h2 className="title">Popular for Seeds</h2>
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
			<br />
			<br />
			<br />
			<br />
			<br />
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

export default Products;
