import { createStoreon } from "storeon"
import { routerNavigate } from "@storeon/router"
import { storeonDevtools } from "storeon/devtools"
import router from "./router"
import language from "./language"

const store = createStoreon([
    language,
    router,
    storeonDevtools,
])

const navigate = (target) => {
    store.dispatch(routerNavigate, target)
}

export { navigate }
export default store
