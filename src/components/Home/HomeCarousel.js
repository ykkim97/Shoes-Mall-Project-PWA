import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./HomeCarousel.module.css";

// Home 슬라이드
function HomeCarousel() {
    return (
        <div>
            <Carousel fade className={styles['carousel-frame']}>
                <Carousel.Item className={styles['carousel-item']}>
                    <img
                        className={`d-block w-100 ${styles['carousel-img']}`}
                        src="img/home-carousel1.JPG"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dark navy</h3>
                        <p>15% 할인</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles['carousel-item']}>
                    <img
                        className={`d-block w-100 ${styles['carousel-img']}`}
                        src="img/home-carousel2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Brown Stone</h3>
                        <p>30% 할인</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles['carousel-item']}>
                    <img
                        className={`d-block w-100 ${styles['carousel-img']}`}
                        src="img/home-carousel3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className={styles['item3']}>Converse RedWhite</h3>
                        <p className={styles['item3']}>10% 할인</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel;