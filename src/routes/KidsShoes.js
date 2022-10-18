import React from "react";
import Footer from "../components/Footer";
import HomeNavbar from "../components/Home/HomeNavbar";
import HomePopularItem from "../components/Home/HomePopularItem";
import styles from "./KidsShoes.module.css";

function KidsShoes({
    popularShoes, 
    isLogged, 
    setIsLogged, 
    ax
}) {
    const count = [0]; // 상품 개수

    return(
        <>
            <div className={styles.kidsShoesDiv}>
                <div>
                    <HomeNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
                    <h3 className={styles.title}>키즈신발 ({count}개의 상품)</h3>
                    <div className="container" id={styles["itemContainer"]}>
                        <div className="row" id={styles["item"]}>
                            {ax && popularShoes.map((shoes, idx) => {
                                if(shoes.classify == "kid") {
                                    count[0] += 1;
                                    return (
                                        <HomePopularItem shoes={shoes} key={idx} idx={idx} />
                                    )
                                } 
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default KidsShoes; 