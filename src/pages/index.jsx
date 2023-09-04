import { useStoreon } from "storeon/react"
import { routerKey } from "@storeon/router"
import React from "react"
import PrincipalPage from "./PrincipalPage/PrincipalPage"
import Galery from "./Galery/Galery"

function Page() {
    const { [routerKey]: route } = useStoreon(routerKey)

    let Component = null
    switch (route.match.page) {
        case "home":
            Component = <PrincipalPage />
            break

        case "galery":
            Component = <Galery />
            break

        default:
            Component = <h1>404</h1>
            break
    }

    return <main>{Component}</main>
}

export default Page
