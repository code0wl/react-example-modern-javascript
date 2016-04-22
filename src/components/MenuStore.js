import dispatcher from "./MenuDispatcher"

let store = {

    selected    : false,

    getState () {
        let selected = this.selected
        return {
            selected
        }
    }

}

dispatcher.register(payload => {

        let actionType = payload.ActionType
        switch (actionType) {

            case "redirect":
            store.selected = !store.selected
            break
        }

})
export default store

