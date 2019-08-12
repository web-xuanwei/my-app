import React, { Component } from 'react';
import PostItem from './PostItem';

const data = [
    {title: "xw1", author: "xx1", date: "2019-8-1"},      
    {title: "xw2", author: "xx2", date: "2019-8-2"},      
    {title: "xw3", author: "xx3", date: "2019-8-3"}    
]

class PostList extends Component{
    
    render(){
        return(
            <div>
                帖子列表：
                <ul>
                    {
                        data.map(item => 
                            <PostItem
                                title = {item.title}
                                author = {item.author}
                                date = {item.date}
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default PostList;