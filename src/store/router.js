import { createRouter } from "@storeon/router"

export default createRouter([
    ["/", () => ({ page: "home" })],
    ["/galery", () => ({ page: "galery" })]
])
