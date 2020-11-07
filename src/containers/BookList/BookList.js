import React, {Component} from 'react'
import styles from './Home.module.css'
import Header from "../../components/Heder/Header";
import {connect} from "react-redux";
import {addBook, removeBook} from '../../store/actions/library';

class Home extends Component {

    render() {
        console.log(this.props)
        return (
            <>
                <Header/>
                <div className={styles.container}>
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
        removeBook: (readerObject) => dispatch(removeBook(readerObject))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);