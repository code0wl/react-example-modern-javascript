import React from 'react'

let UserDetail = React.createClass({

    propTypes : {
        username  : React.PropTypes.string.isRequired,
        remark     : React.PropTypes.string.isRequired
    },

    getDefaultProps () {
        return {
            username   : "姓名",
            remark     : "评论"
        }
    },

    render () {
        return <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.props.username}
                    </div>
                    <div className="panel-body">
                        {this.props.remark}
                    </div>
                </div>
    }

})

export default UserDetail