import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {render} from 'react-dom'
import MenuItem from './components/menu-item'
import CommentBox from './components/comment/CommentBox'
import Comment      from './components/comment/Comment'
import UserForm     from  './components/UserForm'

(function () {
    let container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    render(
            <div>
                <UserForm/>
                <CommentBox>
                    <Comment author="甘腾胜">
                        <strong>就是不爱学</strong>就是不爱学
                    </Comment>
                </CommentBox>
                <MenuItem/>
            </div>,
            container);
})()