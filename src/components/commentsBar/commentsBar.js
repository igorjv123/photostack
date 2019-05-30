import React, {Component} from 'react'
import CommentView from 'components/commentView/commentView'
import './style.scss'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'
import LoadingImage from 'images/loading.gif'



class CommentsBar extends Component {
    componentWillMount(){
        this.props.loadComments(this.props.imageId)
    }
    scrollToBottom() {
        this.el.scrollIntoView({ behavior: 'smooth' });
    }
    componentDidMount(){
        this.scrollToBottom()
    }
    componentDidUpdate() {
        this.scrollToBottom();
      }
    render(){
        const { comments } = this.props
        return(
            <div className='commentsContainer' >
                {
                    !Array.isArray(comments)?
                        <img className='cardContainerLoading'style={{height:142, width:400}} src={LoadingImage}/>
                    :
                        comments.length>0?
                            comments.map((comment, )=>
                             <CommentView comment={comment} key={comment._id}/>
                            )   
                        :
                        <p className='commentsContainerAltText'>There are no comments yet</p>
                }
                <div ref={el => { this.el = el; }}></div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentsBar);