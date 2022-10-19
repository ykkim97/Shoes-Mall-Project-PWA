import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import styles from "./DetailPayment.module.css";
import { disableScroll, enableScroll } from "../../module/ScrollFixed.js";

function DetailPayment({ openBuyItNowModal, findItem, itemCount }) {
    useEffect(() => {
        disableScroll();
        return () => enableScroll();
    }, []);

    return (
        <div className={styles["payment-modal"]}>
            <div className={styles["bg"]}></div>
            <div className={styles["modalBox"]}>
                <h4 id={styles["title"]}>
                    결제 금액 <p id={styles["total"]}> {findItem.price * itemCount}</p>원
                </h4>
                <hr />
                <div id={styles["payment-info"]}>
                    <p>아래 입금 정보를 확인하신 후, 계좌로 송금해주세요.</p>
                    <p>입금은행 : OO은행</p>
                    <p>계좌번호 : 123123123123 </p>
                    <p>예금주 : CAFESHOE</p>
                    <p>입금액 : {findItem.price * itemCount} 원</p>
                    <p>3일 이내로 입금하지 않을 경우 결제가 취소됩니다.</p>
                    <Button className={styles["closeBtn"]} onClick={openBuyItNowModal}>확인</Button>
                </div>
            </div>
        </div>
    )
}

export default DetailPayment;