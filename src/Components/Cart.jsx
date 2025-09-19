import React from "react";
import "../style/Cart.css";
import flash from "../assets/flash.png";
import tutorial from "../assets/tutorial.svg";
import back from "../assets/back.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const navigate = useNavigate();

	return (
		<div className="c">
			<div className="m">
				<img src={back} onClick={() => navigate("/back")}></img>
				<div className="b1">
					<button>
						<img src={tutorial} alt="" />
					</button>
				</div>
			</div>
			<div className="p"></div>
			<p className="dot">....</p>
			<div className="detail">
				<h3>Tomato Seeds</h3>
				<h2>
					Rs 20.0<p>/Pack</p>
				</h2>
				<form>
					<input type="number" defaultValue={0}></input>
				</form>
			</div>
			<div className="btnC">
				<button>Add to Cart</button>
				<button onClick={() => navigate("/payments")}>
					Buy Now<img src={flash}></img>
				</button>
			</div>
		</div>
	);
};
export default Cart;
