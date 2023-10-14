import React from "react";
import { Card } from "./Card";
import jordan from '../assets/jordan.jpeg'
import iceburg from '../assets/iceburg.jpeg'
import zara from '../assets/zara.jpeg'

export const Cards = () => {
  return (
    <>
      <section className="card-part">
        <div className="container">
          <div className="row gy-5 d-flex ">
            <Card
              photo = {jordan}
              desc={`The Jordan 1 Retro High "Bred Toe" available at Stadium Goods is a timeless sneaker combining classic colors and high-quality condition. gives luxurious feel.`}
              name="Jordan"
            ></Card>
            <Card
              photo = {iceburg}
              desc={`Iceburg, the juice store in college, serves up refreshing and delicious beverages to keep students energized.`}
              name="Ice Burg"
            ></Card>
            <Card
              photo = {zara}
              desc={`Zara shopping offers contemporary fashion enthusiasts a wide selection ofstylish clothing and accessories with a modern edge.`}
              name="zara"
            ></Card>
            <Card
              photo = {jordan}
              desc={`The Jordan 1 Retro High "Bred Toe" available at Stadium Goods is a timeless sneaker combining classic colors and high-quality condition.`}
              name="Jordan"
            ></Card>
            <Card
              photo = {jordan}
              desc={`The Jordan 1 Retro High "Bred Toe" available at Stadium Goods is a timeless sneaker combining classic colors and high-quality condition.`}
              name="Jordan"
            ></Card>
            <Card
              photo = {jordan}
              desc={`The Jordan 1 Retro High "Bred Toe" available at Stadium Goods is a timeless sneaker combining classic colors and high-quality condition.`}
              name="Jordan"
            ></Card>
          </div>
        </div>
      </section>
    </>
  );
};
