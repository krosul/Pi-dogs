import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.scss";

export default function CartForDogs({ dog }) {
  return (
    <figure className={style.card}>
      <h1 className={style.h1}>{dog.name}</h1>
      <img
        className={style.image}
        src={
          !dog.image
            ? "https://media.istockphoto.com/vectors/decorative-portrait-of-rhodesian-ridgeback-dog-vector-illustration-vector-id1222576794?k=20&m=1222576794&s=612x612&w=0&h=IZynRXh9GCflmZZsVp9SmxvnnuQW3ZCAgOecQ3-9oOg="
            : dog.image.url
        }
        alt="Foto perrito"
      />
      <figcaption>
        <h3>More Info</h3>
        <p>
          their temperaments are:
          {dog.temperament
            ? dog.temperament
            : dog.Temperaments.map((e) => e.name)}
        </p>
        <p>your height is:{dog.height}cm</p>
        <p>your weight is:{dog.weight}kg</p>
        <p>their average years of life are:{dog.life_span}</p>
        <Link to={"/dogs/" + dog.id}>
          <button>More info</button>
        </Link>
      </figcaption>
    </figure>
  );
}
