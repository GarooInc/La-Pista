const language = (store) => {
    store.on("@init", () =>  ({
        language: "es",
    }))
    store.on("language/set", (_, newLanguage) => {
        console.log("language/set", newLanguage)
        return {
            language: newLanguage,
        }
    })
    store.on("language/clean", () => {
        return {
            language: "es",
        }
    })
}

export default language
