import React from 'react'
import './style.scss'
import Moment from 'react-moment'

const CommentView = (props) => {
    let { comment } = props
    return(
        <div className='commentView'>
            <div className='commentInfo'>
                <p className='commentAuthor'>{comment.authorFullName}</p>
                <p className='commentDate'><Moment format='DD/MM/YY'>{comment.date}</Moment></p>
            </div>
           
            <p className='commentText'>{comment.text}</p>
        </div>
    )
}
export default CommentView;