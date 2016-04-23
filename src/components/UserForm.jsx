import React from 'react'
import UserDetail from './UserDetail'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

let UserForm = React.createClass({

    mixins : [LinkedStateMixin],

    getInitialState () {
        return {
            username : "",
            markup   : ""
        }
    },

    render () {
        let usernameLink = this.linkState('username'),
             remarkLink  = this.linkState('markup')
        let usernameChange = e => usernameLink.requestChange(e.target.value),
             remarkChange = e => remarkLink.requestChange(e.target.value)
        return <section>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label for="username" className="col-xs-4 control-label">姓名</label>
                            <div className="col-xs-8">
                                <input type="text" className="form-control" id="username"
                                        placeholder="姓名"
                                        valueLink={usernameLink}
                                        />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="markup" className="col-xs-4 control-label">评论</label>
                            <div className="col-xs-8">
                                    <textarea className="form-control"
                                               id="markup"
                                               placeholder="评论"
                                               valueLink={remarkLink}
                                               rows="5">
                                    </textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-offset-4 col-xs-8">
                                <button className="btn btn-primary">保存</button>
                            </div>
                        </div>
                    </form>
                    <UserDetail username={this.state.username} remark={this.state.markup}>
                    </UserDetail>
                </section>
    }

})

export default UserForm