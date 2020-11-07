import React, {Component} from 'react'
import styles from './Home.module.css'
import Header from "../../components/Heder/Header";
import Wave from "../../components/Wave/Wave";
import BookList from "../BookList/BookList";

class Home extends Component {

    render() {
        return (
            <div style={{minHeight: '100vh'}}>
                <Header/>
                <div className={styles.container}>
                    <BookList/>
                </div>
                <Wave/>
            </div>
        )
    }
}

export default Home;