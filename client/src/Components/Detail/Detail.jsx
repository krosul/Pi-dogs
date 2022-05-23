import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, resetDetail } from "../../store/actions";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  let dispatch = useDispatch();
  let dog = useSelector((e) => e.dog);
  console.log(dog)
  useEffect(() => {
    dispatch(getDetail(id));

    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch, id]);

  return (
    <>
      <div>
        <Link to="/dogs/">
          <div className={style.container}>
            <div className={style.full}></div>
            <div class={style.arrow}></div>
          </div>
          <div className={style.full}></div>
        </Link>
        {!dog[0] ? (
          <div className={style.loader}></div>
        ) : (
          <div className={style.card}>
            <h1>{dog[0].name}</h1>
            <hr />

            <img
              className={style.image}
              src={
                !dog[0].image
                  ? "https://media.istockphoto.com/vectors/decorative-portrait-of-rhodesian-ridgeback-dog-vector-illustration-vector-id1222576794?k=20&m=1222576794&s=612x612&w=0&h=IZynRXh9GCflmZZsVp9SmxvnnuQW3ZCAgOecQ3-9oOg="
                  : dog[0].image.url
              }
              alt="Foto perrito"
            />
            <p>
              sus o su temperamente es:
              {dog[0].temperament
                ? dog[0].temperament
                : dog[0].Temperaments.map((e) => e.name)}
            </p>
            <p>su altura es:{dog[0].height}cm</p>
            <p>su peso es:{dog[0].weight}kg</p>
            <p>{dog[0].life_span}</p>
          </div>
        )}
      </div>
    </>
  );
}
