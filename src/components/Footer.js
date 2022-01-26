import React from "react";

const Footer = () => {
	return (
		<div className="footer" id="contacts">
			<nav
				class="navbar navbar-light bg-light mb-5"
				id="contacts"
			>
				<div class="container-fluid">
					<span class="navbar-brand mb-0 h1">
						Contact
					</span>
					<span class="navbar-brand  mb-0 h1">
						<a href="tel:214.490.2721">
							<i
								class="fas fa-phone"
								id="call"
							>
								Call:
								214.490.2721
							</i>
						</a>
					</span>
					<span class="navbar-brand mb-0 h1">
						<a href="mailto: www.jason.day.blue@gmail.com">
							<i
								class="fas fa-envelope"
								id="email"
							>
								Email:
								jason.day.blue@gmail.com
							</i>
						</a>
					</span>
					<i class="fas fa-smile"></i>
				</div>
			</nav>
		</div>
	);
};

export default Footer;
