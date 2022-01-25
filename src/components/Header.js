import React from "react";

const Header = () => {
	return (
		<div className="header">
			<div class="jumbotron jumbotron-fluid p-5">
				<div class="container">
					{/* <img src="./assets/images/thumbnail_Snapchat-450802663.jpg" class="rounded mx-auto d-block img-thumbnail"
        id="selfie" alt="..."> */}
					<h1 class="display-4">jason day</h1>
					<p class="lead">
						full stack developer{" "}
					</p>
				</div>
			</div>

			<figure class="text-center">
				<blockquote class="blockquote">
					<p>
						It is no nation that we inhabit,
						but a language. Make no mistake;
						our native toungue is our true
						fatherland.
					</p>
				</blockquote>
				<figcaption class="blockquote-footer">
					<cite title="Source Title">
						Emil Cioran
					</cite>
				</figcaption>
			</figure>
		</div>
	);
};

export default Header;
