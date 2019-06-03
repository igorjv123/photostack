import React, {Component} from 'react'
import './style.scss'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'
import './style.scss'
import CommentsBar from 'components/commentsBar/commentsBar'
import AddComment from 'components/addComment/addComment'
import ReactStars from 'react-stars'
import Moment from 'react-moment'
import AuthHOC from 'components/authHOC/authHOC'

class OpenedPhotoContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeImage:this.props.activeImage,
            images: this.props.images,
            mark:{
                mark:null,
                amount:null
            }
        }
    }
    componentWillMount(){
        this.props.getMarkInfo(this.state.activeImage._id)
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.mark !== this.props.mark) {
          this.setState({mark: this.props.mark})
           
        }
      } 
    handleStarsChange=(val)=>{
        const mark = {
            imageId: this.state.activeImage._id,
            authorId: this.props.user._id,
            mark: val,
            date: new Date()
        }
        this.props.handleMarkChange(mark)
    }
    render(){
        const mark = this.props.mark.mark?this.props.mark.mark:0
        const amount = this.props.mark.amount?this.props.mark.amount:0
        const image = this.state.activeImage
        return(
            <div className='openedPhotoWrapper'>
                <div className='openedPhotoContainer' >
                <div className='popUpSlider'>
                    <img className='openedPhoto' src={image.image.base64} alt=''/>
                </div>
                <div className='openedPhotoInfo'>
                    <div>
                        <p className='bold openedPhotoTitle'>{image.title}</p>
                        <p>{image.description}</p>
                        <p className='downloadLink'><a  href={image.image.base64} download>Download</a></p>
                    </div>    
                    <div className='rightBar'>
                    <div className='rateSection'>
                        <ReactStars
                        count={5}
                        onChange={this.handleStarsChange}
                        value={mark}
                        size={30}
                        color2={'#ffd700'} 
                        />
                        <p>{mark}/{amount}</p>
                    </div>

                        <p className='smallText pink'>Added by{image.authorFullName}</p>
                        <p className='smallText'>Date: <span className='pink'><Moment format='DD/MM/YYYY'>{image.date}</Moment></span> Size: <span className='pink'>{image.image.size}</span></p>
                    </div>           
                    
                </div>
                </div>
                <div className='comments'>
                    <CommentsBar imageId = {image._id}/>
                    <AddComment imageId = {image._id}/>
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthHOC(OpenedPhotoContainer));