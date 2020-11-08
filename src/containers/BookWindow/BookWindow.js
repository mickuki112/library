import React, {Component} from 'react'
import styles from './BookWindow.module.css'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import imageNone from '../../assets/imageNone.png'

class BookWindow extends Component {

    render() {
        const {book,editBook,removeBook}=this.props
        return (
            <div className={styles.bookItem}>
                <div className={styles.edit} >
                    <EditIcon style={{color:"#288eb8"}} onClick={editBook} />
                    <DeleteIcon style={{color:"#288eb8"}} onClick={removeBook}/>
                </div>
                <img
                    className={styles.img}
                    src={book.img}
                    onError={(ev)=>{
                        ev.target.src =imageNone
                    }}
                    alt={'book cover'}
                />
                <p className={styles.title}>{book.title}</p>
                <p className={styles.author}>{book.author}</p>
                <p className={styles.author}>{`${book.yearPublication.getDate()}-${book.yearPublication.getMonth()+1}-${book.yearPublication.getFullYear()}`}</p>
            </div>
        )
    }
}

export default BookWindow;