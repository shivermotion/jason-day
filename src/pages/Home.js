import React from "react";
import photo1 from "../assets/NoteTaker.png";
import photo2 from "../assets/lookbook-mock.png";
import photo3 from "../assets/work_day_scheduler_snapshot.png";

export default function Home() {
	return (
		<div id="background" class="m-4">
			<h1>Projects</h1>
			<div class="container p-5" id="projects">
				<figure class="figure">
					<a href="https://github.com/shivermotion/ScribbleTake">
						<img
							src={photo1}
							class="figure-img img-fluid rounded"
							id="project"
							alt="date date-night-creator-snapshotv2"
						/>
					</a>
					<figcaption class="figure-caption">
						NoteTaker
					</figcaption>
				</figure>

				<figure class="figure">
					<a href="https://shivermotion.github.io/work_day_scheduler/">
						<img
							src={photo3}
							class="figure-img img-fluid rounded"
							id="project"
							alt="work day scheduler"
						/>
					</a>
					<figcaption class="figure-caption">
						Work Day Scheduler
					</figcaption>
				</figure>

				<figure class="figure">
					<a href="https://young-anchorage-47013.herokuapp.com/">
						<img
							src={photo2}
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
