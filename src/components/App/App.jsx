import React from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import Content from '../Content/Content';
import { Routes, Route } from "react-router-dom";
import Error from '../Error/Error';
import Single from '../Single/Single';
import { getNews} from '../../lib/getNews';

function App() {

    return (
    <div className={styles.app}>
        <Header />

        <main className={styles.main}>
            <Routes>
                <Route path='news/:url' element={<Content />}/>   
                <Route path='*' element={<Error />} />
            </Routes>
        </main>
    </div>
    )
}

export default App;