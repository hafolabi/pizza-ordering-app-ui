import Image from "next/image";
import React from "react";
import styles from "../styles/Slider.module.css";

const Slider = () => {
  const images = [
    "/img/slide1.jpg",
    "/img/slide2.jpg",
    "/img/slide3.jpg",
  ]
  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" layout='fill' alt="" />
      <div className={styles.wrapper}>
          {images.map((img, i)=>(
            <div className={styles.imgContainer} key={i}>
             <Image src={img} layout='fill' alt="" />
             </div>
          ))}
      </div>
      <Image src="/img/arrowr.png" layout='fill' alt="" />
    </div>
  );
};

export default Slider;
