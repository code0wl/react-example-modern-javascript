import dispatcher from "./MenuDispatcher"

export default class MenuActions {

    static navigate(route) {
        dispatcher.dispatch({
            ActionType : "redirect",
            location    : route
        })
    }

}