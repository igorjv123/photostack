import React, {Component} from 'react'
import BtnSubmit from 'components/inputs/button'
import './style.scss'
import AuthHOC from 'components/authHOC/authHOC'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'

class AddComment extends Component {
    constructor(){
        super()
        this.state = {
            text:''
        }
    }
    addBtnSubmit=()=>{
        const {firstName, lastName, _id} = this.props.user
        const comment = {
            authorFullName: firstName+' '+lastName,
            authorId: _id,
            text: this.state.text,
            imageId: this.props.imageId,
            answerTo: null
        }
        this.props.addCommentSumbit(comment)
        this.setState({text:''})
        

    }
    textChange = (e) => {
        this.setState({text:e.target.value})
    }
    render(){
        let disabled=true;
        if(this.state.text){
            disabled=false
        }
        return(
            <div className='addCommentWrapper'>
                <textarea onChange={this.textChange} value={this.state.text}className='addCommentText' ></textarea>
                <BtnSubmit onClick={this.addBtnSubmit} disabled={disabled} style={{width:'70px'}} value='Add'/>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthHOC(AddComment));