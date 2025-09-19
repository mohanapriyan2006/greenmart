import React, { useState } from "react";
import "../style/Payments.css";
import tutorial from "../assets/tutorial.svg";
// Example image imports (replace with actual paths)
import gpayIcon from "../assets/gpay.png";
import netBankingIcon from "../assets/netbank.png";
import creditCardIcon from "../assets/credit.png";
import codIcon from "../assets/Delivery.png";
import product1 from "../assets/p1.png";
import product2 from "../assets/p2.png";
import product3 from "../assets/p3.png";
import back from "../assets/back.png";
import { useNavigate } from "react-router-dom";

const Payments = () => {
	const navigate = useNavigate();

	// State for selected payment method
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cod");

	// State for cart items
	const [cartItems, setCartItems] = useState([
		{
			id: "product1",
			imgSrc: product1,
			title: "Product Title 1",
			description: "This is a product Description",
			price: "33,560",
			quantity: 1,
		},
		{
			id: "product2",
			imgSrc: product2,
			title: "Product Title 2",
			description: "This is a product Description",
			price: "33,560",
			quantity: 1,
		},
		{
			id: "product3",
			imgSrc: product3,
			title: "Product Title 3",
			description: "This is a product Description",
			price: "33,560",
			quantity: 50,
		},
	]);

	// Function to handle quantity change
	const handleQuantityChange = (productId, amount) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === productId
					? { ...item, quantity: Math.max(1, item.quantity + amount) }
					: item
			)
		);
	};

	// Function to handle removing an item
	const handleSaveForLater = (productId) => {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== productId)
		);
	};

	return (
		<div className="cart-page">
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

			<h2 className="cart-title">My Cart</h2>

			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						imgSrc={item.imgSrc}
						title={item.title}
						description={item.description}
						price={item.price}
						quantity={item.quantity}
						onQuantityChange={(amount) => handleQuantityChange(item.id, amount)}
						onSaveForLater={() => handleSaveForLater(item.id)}
					/>
				))}
			</div>

			<div className="payment-methods">
				<h3>Payment Methods</h3>
				<PaymentMethod
					iconSrc={gpayIcon}
					method="Gpay / UPI"
					selected={selectedPaymentMethod === "gpay"}
					onSelect={() => setSelectedPaymentMethod("gpay")}
				/>
				<PaymentMethod
					iconSrc={netBankingIcon}
					method="Net Banking"
					selected={selectedPaymentMethod === "netbanking"}
					onSelect={() => setSelectedPaymentMethod("netbanking")}
				/>
				<PaymentMethod
					iconSrc={creditCardIcon}
					method="Debit/Credit Card"
					selected={selectedPaymentMethod === "creditcard"}
					onSelect={() => setSelectedPaymentMethod("creditcard")}
				/>
				<PaymentMethod
					iconSrc={codIcon}
					method="Cash on Delivery"
					selected={selectedPaymentMethod === "cod"}
					onSelect={() => setSelectedPaymentMethod("cod")}
				/>
			</div>

			<div className="summary">
				<p>
					Estimated Total <span>31,500.25</span>
				</p>
				<p>
					GST <span>100.0</span>
				</p>
				<p>
					CGST <span>100.0</span>
				</p>
				<p>
					Transport Fee <span>100.0</span>
				</p>
				<p>
					Service Fee <span>100.0</span>
				</p>
				<p className="total-pay">
					You have to Pay <span>31,900.25</span>
				</p>
			</div>

			<div className="action-buttons">
				<button className="loan-button">Avail Bank Loan</button>
				<button className="pay-now-button">Pay Now ⚡</button>
			</div>
		</div>
	);
};

const CartItem = ({
	imgSrc,
	title,
	description,
	price,
	quantity,
	onQuantityChange,
	onSaveForLater,
}) => (
	<div className="cart-item">
		<img src={imgSrc} alt={title} className="product-image" />
		<div className="product-details">
			<h4>{title}</h4>
			<p>{description}</p>
			<div className="price-and-quantity">
				<p className="price">Rs {price}</p>
				<div className="quantity-selector">
					<button
						className="quantity-button"
						onClick={() => onQuantityChange(-1)}
					>
						-
					</button>
					<input type="text" value={quantity} readOnly />
					<button
						className="quantity-button"
						onClick={() => onQuantityChange(1)}
					>
						+
					</button>
				</div>
			</div>
			<button className="save-later-button" onClick={onSaveForLater}>
				Save for later
			</button>
		</div>
	</div>
);

const PaymentMethod = ({ iconSrc, method, selected, onSelect }) => (
	<div
		className={`payment-method ${selected ? "selected" : ""}`}
		onClick={onSelect}
	>
		<img src={iconSrc} alt={method} className="payment-icon" />
		<p>{method}</p>
		<input type="radio" checked={selected} readOnly />
	</div>
);

export default Payments;
