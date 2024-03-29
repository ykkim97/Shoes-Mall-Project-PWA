// 장바구니 Page

import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/Common/HomeNavbar";
import { Table,Button } from "react-bootstrap";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import CartPayment from "../components/Cart/CartPayment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function Cart({ isLogged, setIsLogged }) {
    let total = 0;
    const [cartArray, setCartArray] = useState([]);
    const [modalOn, setModalOn] = useState(false);

    // 결제모달창의 입금액을 표시하기 위해 총 결제금액을 저장할 변수 modalTotal
    let modalTotal = [];

    const state = useSelector((state) => state.basketReducer);
    const alertState = useSelector((state) => state.basketAlertReducer);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Modal
    const onOpenModal = () => {
        setModalOn(!modalOn);
    }

    // cartArray에 DB에서 가져온 장바구니 데이터 저장하기
    useEffect(() => {
        if (isLogged) {
            const database = getDatabase();
            const auth = getAuth();
            const userId = auth.currentUser.uid;
            const cartRef = ref(database, `users/${userId}/cart`);

            onValue(cartRef, (snapshot) => {
                let cartFromDB = snapshot.val();
                if (cartFromDB == null) cartFromDB = [];
                setCartArray([...cartFromDB]);
            })
        }
    }, []);

    return (
        <>
            <div className={styles.shoppingBasketDiv}>

                {/* Navbar */}
                <HomeNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>

                {/* "장바구니" 제목 */}
                <h1 className={styles.shoppingBasket}>장바구니</h1>

                {/* 장바구니 목록 테이블 */}
                <Table className={styles.basketTable} striped bordered hover>
                    <thead className={styles.basketTableHead}>
                        <tr>
                            <th className={styles.headId}>ID</th>
                            <th>상품명</th>
                            <th className={styles.headQuan}>수량</th>
                            <th>가격</th>
                            <th>합계</th>
                            <th className={styles.headChange}>변경</th>
                        </tr>
                    </thead>
                    <tbody className={styles.basketTableBody}>
                        {(isLogged ? cartArray : state).map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.id}</td> 
                                    <td>{item.name}</td>
                                    <td>{item.quan}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        {item.price * item.quan}
                                    </td>
                                    <td className={styles.quanChangeBtn}>
                                        <button 
                                            onClick={() => {
                                                if (isLogged) {
                                                    const database = getDatabase();
                                                    const auth = getAuth();
                                                    const userId = auth.currentUser.uid;
                                                    item.quan++;
                                                    update(ref(database, `users/` + userId), {
                                                        cart: cartArray,
                                                    })
                                                } else {
                                                    dispatch({type : "수량증가", id : item.id, price : item.price})
                                                }
                                                
                                            }
                                        }><FontAwesomeIcon icon={faPlus} className={styles.faBtn} /></button>
                                        <button 
                                            onClick={() => {
                                                if (isLogged) {
                                                    const database = getDatabase();
                                                    const auth = getAuth();
                                                    const userId = auth.currentUser.uid;
                                                    if (item.quan > 1) item.quan--;
                                                    update(ref(database, `users/` + userId), {
                                                        cart: cartArray,
                                                    })
                                                } else {
                                                    if (item.quan > 1) dispatch({type : "수량감소", id : item.id});
                                                }
                                            }
                                        }><FontAwesomeIcon icon={faMinus} className={styles.faBtn} /></button>
                                        <button 
                                            onClick={() => {
                                                if (isLogged) {
                                                    const database = getDatabase();
                                                    const auth = getAuth();
                                                    const userId = auth.currentUser.uid;
                                                    
                                                    let deleteFound = cartArray.findIndex((items) => items.id === item.id);
                                                    cartArray.splice(deleteFound, 1);

                                                    update(ref(database, `users/` + userId), {
                                                        cart: cartArray,
                                                    })
                                                } else {
                                                    dispatch({type : "항목삭제", id : item.id});
                                                }
                                                alert('상품이 삭제되었습니다.')
                                            }
                                        }><FontAwesomeIcon icon={faTrashCan} className={styles.faBtn} id={styles['faBtn-delete']}/></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

                {/* 신규고객 첫 구매시 30%할인 광고 */}
                {
                    alertState === true ? 
                    (<div className={styles.shoppingBasketAlert}>
                        <p>신규 고객 첫 구매 시 30% 할인! </p>
                        <button onClick={() => {
                            dispatch({type : "닫기"})
                        }}>닫기</button>
                    </div>) : null
                }

                
                {/* 총 결제 금액 보여주기 */}
                <div className={styles.totalAmount}>
                    <p>총 결제 금액 : 
                        {(isLogged ? cartArray : state).map(item => {
                            total += (item.price * item.quan);
                            modalTotal.push(total);
                            return total;
                        })[(isLogged ? cartArray : state).length - 1]} 원
                    </p>
                </div>

                {/* 결제하기, 뒤로가기 버튼 */}
                <div className={styles.payment}>
                    <Button className={styles.goPaymentBtn} onClick={onOpenModal}>결제하기</Button>
                    {modalOn ? 
                        <CartPayment 
                            onOpenModal={onOpenModal}
                            modalTotal={modalTotal}
                        /> : ''
                    }
                    <Button className={styles.goBackBtn} onClick={() => {navigate(-1)}}>뒤로가기</Button>
                </div>
            </div>
        </>
    );
}

export default Cart;