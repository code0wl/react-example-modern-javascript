import React from 'react'

let CommentBox = React.createClass({

    render () {
        return  <div className="panel panel-default">
                    <div className="panel-heading">
                        评论
                    </div>
                    <div className="panel-body">
                        {this.props.children}
                    </div>
                 </div>
    }

})

export default CommentBox