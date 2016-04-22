import React from 'react'
import Action from './MenuAction'
import MenuStore from './MenuStore'

class MenuItem extends React.Component {

    constructor () {
        super()
        this.state = MenuStore.getState()
    }

    initialState () {
        return MenuStore.getState()
    }

    redirect (path, event) {
        Action.navigate(path)
        this.setState(MenuStore.getState());
    }

    render () {
        let handler = event => {
            return this.redirect(this.props.text, event)
        }
        //
        let itemClass = "list-group-item"
        if(this.state.selected) {
            itemClass = itemClass + " active"
        }
        return <ul className="list-group">
                    <a href="#" className={itemClass} onClick={handler}>
                        <span>{this.props.text}</span>
                    </a>
                </ul>
    }
}
MenuItem.propTypes = {
    text : React.PropTypes.string
}
MenuItem.defaultProps  = {
    text : "菜单"
}

export default MenuItem