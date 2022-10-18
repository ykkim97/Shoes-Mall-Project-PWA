import React from "react";
import Footer from "../components/Common/Footer";
import HomeNavbar from "../components/Common/HomeNavbar";
import HomePopularItem from "../components/Home/HomePopularItem";
import styles from "./ManShoes.module.css";
import { database } from "../firebase";


function ManShoes({
    popularShoes, 
    isLogged, 
    setIsLogged, 
    ax
}) {
    const count = [0];

    return(
        <>
            <div className={styles.manShoesDiv}>
                <HomeNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
                <h3 className={styles.title}>남성신발 ({count}개의 상품)</h3>
                <div className="container">
                    <div className="row" id={styles["item"]}>
                        {ax && popularShoes.map((shoes, idx) => {
                            if(shoes.classify == "man") {
                                count[0] += 1;
                                return (
                                    <HomePopularItem shoes={shoes} key={idx} idx={idx} />
                                )
                            }
                        })}
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default ManShoes;