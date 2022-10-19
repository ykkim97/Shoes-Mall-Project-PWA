import React from "react";
import styles from "./Footer.module.css";

// Footer Part
function Footer({ addBasketModalOn, buyItNowModalOn }) {
    return (
        <>
            {
                addBasketModalOn || buyItNowModalOn ? (
                    <div className={styles['footer2']}>
                        <div className={styles["footer-info"]}>
                            <h3>카페슈 CafeShoe</h3>
                            <p>이 세상의 특별한 신발</p>
                            <p>Contact : 97ykkim@naver.com</p>
                        </div>
                    </div>
                ) : (
                    <div className={styles['footer']}>
                        <div className={styles["footer-info"]}>
                            <h3>카페슈 CafeShoe</h3>
                            <p>이 세상의 특별한 신발</p>
                            <p>Contact : 97ykkim@naver.com</p>
                        </div>
                    </div>
                )
            }
        </>
        
        
    )
}

export default Footer;