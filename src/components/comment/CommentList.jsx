import React from 'react'

let Comment = React.createClass({

    render () {
        return <h3>{this.props.children}
                    <span className="label label-default">{this.props.author}</span>
                </h3>
    }

})

export default Comment