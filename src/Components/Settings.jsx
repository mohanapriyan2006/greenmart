import React from "react";
import Logo from "../assets/back.png";
import Logo1 from "../assets/cart1.png";
import Logo2 from "../assets/Account.png";
import Logo3 from "../assets/Give.png";
import Logo4 from "../assets/Unlock.png";
import Logo5 from "../assets/Graph.png";
import Logo6 from "../assets/Remove.png";
import tutorial from "../assets/tutorial.svg";
import { useNavigate } from "react-router-dom";

import Logout from "../assets/logout.png";

import "../style/Settings.css";

const Settings = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="settings">
				<div onClick={() => navigate("/back")}>
					<a href="#">
						<img src={Logo} className="logo" alt="Logo" />
					</a>
				</div>
				<div>
					<h2 className="set"> Settings</h2>
				</div>
			</div>
			<div className="mart">
				<ul>
					<li>
						<div className="setmart1">
							<img src={Logo1} alt="" className="logo1" />
							<a href="#">
								<p className="monst">Recent Orders</p>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div className="mart1">
				<ul>
					<li>
						<div className="setmart2">
							<img src={Logo2} alt="" className="logo1" />
							<a href="#">
								<p className="monst">Profile Information</p>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div className="mart2">
				<ul>
					<li>
						<div className="setmart2">
							<img src={Logo3} alt="" className="logo1" />
							<a href="#">
								<p className="monst">Beacome Merchant</p>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div className="mart2">
				<ul>
					<li>
						<div className="setmart2">
							<img src={Logo4} alt="" className="logo1" />
							<a href="#">
								<p className="monst">Privacy and security</p>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div className="mart2">
				<ul>
					<li>
						<div className="setmart2">
							<img src={Logo5} alt="" className="logo1" />
							<a href="#">
								<p className="monst">Report User</p>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div className="mart2">
				<ul>
					<li>
						<div className="setmart2">
							<img src={Logo6} alt="" className="logo1" />
							<a href="#">
								<p className="monsts monst">Account Deletion</p>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div className="mart2">
				<ul>
					<li>
						<div className="setmart2">
							<img src={Logout} alt="" className="logo1" />
							<a href="#">
								<p className="monsts monst">Logout</p>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div className="b1">
				<button>
					<img src={tutorial} alt="" />
				</button>
			</div>
		</>
	);
};

export default Settings;
