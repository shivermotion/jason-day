import React from "react";

export default function Contact() {
	return (
		<div class="m-4">
			<h1>Contact</h1>
			<div class="">
				<label
					for="exampleFormControlInput1"
					class="form-label"
				>
					Email address
				</label>
				<input
					type="email"
					class="form-control"
					id="exampleFormControlInput1"
					placeholder="name@example.com"
				/>
			</div>
			<div class="mb-3">
				<label
					for="exampleFormControlTextarea1"
					class="form-label"
				>
					Message:
				</label>
				<textarea
					class="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
				></textarea>
			</div>
		</div>
	);
}
