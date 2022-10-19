import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./AddBasketModal.module.css";
import { disableScroll, enableScroll } from "../../module/ScrollFixed.js";

const AddBasketModal = ({onOpenModal}) => {
    const navigate = useNavigate();

    useEffect(() => {
        disableScroll();
        return () => enableScroll();
    }, []);

    return (
        <div className={styles["basket-modal"]}>
            
            <div className={styles["modalBox"]}>
                <h3>장바구니에 상품이 담겼습니다!</h3>
                <div className={styles["btnGroup"]}>
                    <Button className={styles["goBasketBtn"]} onClick={() => navigate('/cart')}>장바구니로</Button>
                    <Button className={styles["closeBtn"]} onClick={onOpenModal}>쇼핑 계속하기</Button>
                </div>
            </div>
            <div className={styles["bg"]}></div>
        </div>
    )
}

export default AddBasketModal;