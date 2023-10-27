import React from "react";
import { Card } from "./Card";
import jordan from "../assets/jordan.jpg";
import WaterBottel from "../assets/WaterBottel.jpg";
import Airpod from "../assets/Airpod.jpg";
import Watch from "../assets/Watch.jpg";
import Macbook from "../assets/Macbook.jpg";
import WomenWatch from "../assets/WomenWatch.jpg";

export const Cards = () => {
	return (
		<>
			<section className="card-part">
				<div className="container">
					<div className="row gy-5 d-flex ">
						<Card
							photo={Watch}
							desc={`Fastrack Blue Dial Analog Watch for Men  : NR3290SM01 - A sleek and stylish timepiece designed for men.`}
							name="Watch"
							id={1}
						></Card>
						<Card
							photo={Macbook}
							desc={`Apple MacBook Air M1: 13.3" Retina, 8GB RAM, 256GB SSD, Space Grey, Touch ID, iPhone/iPad compatibility.`}
							name="Macbook"
							id={2}
						></Card>
						<Card
							photo={Airpod}
							desc={`boAt Airdopes 141: Truly wireless in-ear headphones,45 hours of playtime,smooth touch control`}
							name="Airpod"
							id={3}
						></Card>
						<Card
							photo={jordan}
							desc={`Red Tape Men's Casual Sneaker Shoes: comfort with cushioned insole and slip-resistant design.`}
							name="Shose"
							id={4}
						></Card>
						<Card
							photo={WaterBottel}
							desc={`CELLO Puro Sports 900: Set of 2 water bottles, featuring inner steel and outer plastic construction.`}
							name="Water Bottel"
							id={5}
						></Card>
						<Card
							photo={WomenWatch}
							desc={`SWADESI STUFF Premium Leather Strap Watch: Stylish analog watch with a multi-color flower dial.`}
							name="Women Watch"
							id={6}
						></Card>
					</div>
				</div>
			</section>
		</>
	);
};
