import React from "react";

export default function Home() {
	return (
		<div>
			<h1>Projects</h1>
			<div class="container p-5" id="projects">
				<figure class="figure">
					<a href="https://github.com/SherlockTheHomie/Urban-Disco-Burrito">
						<img
							src="assets/images/date-night-creator-snapshotv2.png"
							class="figure-img img-fluid rounded"
							id="project"
							alt="date date-night-creator-snapshotv2"
						/>
					</a>
					<figcaption class="figure-caption">
						Date Night Creator
					</figcaption>
				</figure>

				<figure class="figure">
					<a href="https://shivermotion.github.io/work_day_scheduler/">
						<img
							src="assets/images/work_day_scheduler_snapshot.png"
							class="figure-img img-fluid rounded"
							id="project"
							alt="work day scheduler"
						/>
					</a>
					<figcaption class="figure-caption">
						Work Day Scheduler{" "}
					</figcaption>
				</figure>

				<figure class="figure">
					<a href="https://young-anchorage-47013.herokuapp.com/">
						<img
							src="assets/images/lookbook-mock.png"
							class="figure-img img-fluid rounded"
							id="project"
							alt="LookBook"
						/>
					</a>
					<figcaption class="figure-caption">
						Look Book - a social app for
						readers
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
