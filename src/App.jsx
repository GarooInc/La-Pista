import React from "react"
import { StoreContext } from "storeon/react"
import store from "./store/index"
import Page from "./pages/index"
import styles from "./App.module.css"
import "./assets/fonts/fonts.css"

function App() {
    return (
        <StoreContext.Provider value={store}>
            <div className={styles.App}>
                <Page />
            </div>
        </StoreContext.Provider>
    )
}

export default App
