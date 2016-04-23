import React from 'react'
import marked from 'marked'

let Comment = React.createClass({

    rawMarkup () {
        let children = React.Children.map(this.props.children, function (child) {
            return {child}
        })
        let rawMarkup = marked(children, {sanitize : true})
        return {
            __html :rawMarkup
        }
    },

    render () {

        return <h3>{marked(this.props.children.toString())}
                    <span className="label label-default">{this.props.author}</span>
                </h3>
        /**
        return <h3>
                    <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
                    <span className="label label-default">{this.props.author}</span>
                </h3>
         **/
    }

})

export default Comment