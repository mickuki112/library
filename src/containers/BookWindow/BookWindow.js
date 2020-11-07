import React from "react";
import styles from './BookWindow.module.css'

const BookWindow=({book})=>(
    <div className={styles.bookItem}>
        <div className={styles.img} style={{backgroundImage: `url(${book.img})`}}/>
        <p className={styles.title}>{book.title}</p>
        <p className={styles.author}>{book.author}</p>
    </div>
)

export default BookWindow;