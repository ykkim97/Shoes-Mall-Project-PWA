import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePopularItem.module.css";

// 인기상품 컴포넌트
function HomePopularItem({shoes, idx}) {
    const navigate = useNavigate();
    return (
        <>
            {
                idx < 21 
                ? (
                    <div className="col-md-4 populars" onClick={() => {navigate(`/detail/${shoes.id}`)}} id={styles.HomePopularItemDiv}>
                        <img 
                            src={`https://firebasestorage.googleapis.com/v0/b/shoes-shoppingmall.appspot.com/o/items%2Fshoes${idx}.jpg?alt=media`} 
                            width="80%" 
                            height="190px" 
                            className={styles.itemImage}
                        />
                        <h4 className={styles['shoes-title']}>{shoes.title}</h4>
                        <p className={styles['shoes-content']}>{shoes.content}</p>
                        <p className={styles['shoes-price']}>{shoes.price}원</p>
                    </div>
                ) : null
            }
        </>        
    )
}

export default HomePopularItem;