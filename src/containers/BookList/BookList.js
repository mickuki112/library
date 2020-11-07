import React, {Component} from 'react'
import styles from './BookList.module.css'
import {connect} from "react-redux";
import BookWindow from "../BookWindow/BookWindow";
import Modal from "../../components/Modal/Modal";
import {addBook, removeBook, editBook} from "../../store/actions/library";

class BookList extends Component {

    state = {
        hidden: true,
        index: null,
        title: '',
        author: '',
        img: '',
        filter: '',
    }

    modalClose = () => {
        this.setState({
            hidden: !this.state.hidden,
            index: null,
            title: '',
            author: '',
            img: '',
        })
    }

    editBook = (index) => {
        const {books} = this.props

        this.setState({
            hidden: false,
            ...books[index],
            index
        })
    }

    saveBook = () => {
        const {title, author, img, index} = this.state
        if (index) {
            this.props.editBook(
                {
                    title,
                    author,
                    img
                }, index)
        }else{
            this.props.addBook(
                {
                    title,
                    author,
                    img
                })
        }
        this.modalClose();
    }

    filter = (e) => {
        const re = new RegExp(this.state.filter + '.+$', 'i');

        const newBook = this.props.books.filter((e) => {
            return e.title.search(re) !== -1
        });

        return newBook
    }

    render() {
        const {title, author, img, filter} = this.state
        return (
            <>
                <input
                    type='Filter'
                    name='Filter'
                    className={styles.input}
                    placeholder='Filter'
                    value={filter}
                    // onChange={this.filter}
                    onChange={(e) => this.setState({filter: e.target.value})}
                />
                <button onClick={() => this.setState({hidden: false})} className={styles.buttonAdd}>Add Book</button>
                <div className={styles.container}>
                    <Modal hidden={this.state.hidden} close={this.modalClose}>
                        <div className={styles.containerInput}>
                            <input
                                type='title'
                                name='title'
                                className={styles.input}
                                placeholder='title'
                                value={title}
                                onChange={(e => this.setState({title: e.target.value}))}
                            />
                            <input
                                type='author'
                                name='author'
                                className={styles.input}
                                placeholder='author'
                                value={author}
                                onChange={(e => this.setState({author: e.target.value}))}
                            />
                            <input
                                type='img'
                                name='img'
                                className={styles.input}
                                placeholder='image'
                                value={img}
                                onChange={(e => this.setState({img: e.target.value}))}
                            />
                        </div>
                        <div>
                            <button onClick={this.modalClose} className={styles.buttonClose}>Close</button>
                            <button onClick={this.saveBook} className={styles.buttonSave}>Save</button>
                        </div>
                    </Modal>
                    {this.filter().map((book, i) => (
                        <BookWindow
                            key={i}
                            book={book}
                            editBook={() => this.editBook(i)}
                            removeBook={() => this.props.removeBook(i)}
                        />
                    ))}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {books: state.library.books}
};

const mapDispatchToProps = dispatch => {
    return {
        addBook: (readerObject) => dispatch(addBook(readerObject)),
        editBook: (readerObject, index) => dispatch(editBook(readerObject, index)),
        removeBook: (readerObject) => dispatch(removeBook(readerObject))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
