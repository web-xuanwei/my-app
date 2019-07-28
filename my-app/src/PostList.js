import React, { Component } from 'react';

class PostList extends Component{
    render(){
        return(
            <div>
                帖子列表：
                <ul>
                    <li>大家一起来讨论react吧</li>
                    <li>前端， 你最爱哪一个</li>
                    <li>Webapp的时代已经到来</li>
                </ul>
            </div>
        )
    }
}

export default PostList;