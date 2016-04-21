import React from 'react'

class MenuItem extends React.Component {

    constructor () {
        super()
    }

    render () {
        return <li class="list-group-item">
                {this.props.text}
                </li>
    }
}
MenuItem.propTypes = {
    text : React.PropTypes.string
}
MenuItem.defaultProps  = {
    text : "菜单"
}

export default MenuItem