import React from 'react'
import './style.scss'
import {NavLink} from 'react-router-dom'

class BurgerMenuProfile extends React.Component{
    constructor(props){
        super(props)
        this.info = React.createRef();
        this.state = {
            minimize:false
        }

    }
    // handleScroll
    componentDidMount(){
        var el = document.querySelector('#burgerMenuContent')
        el.onscroll = () => {
            if(el.scrollTop>150 && this.state.minimize === false){
                el.scrollBy(0, 100)
                this.setState({minimize:true})
            }
            if(el.scrollTop<50 && this.state.minimize === true){
                this.setState({minimize:false}, ()=>console.log(this.state))
            }
        }
    }
    render(){
        const { user } = this.props
        const { minimize } = this.state
        return(
            <div 
                style={{backgroundImage: `url(${user.photo})`}} 
                className={minimize?'burgerMenuProfileMin':'burgerMenuProfile'}>
                <div 
                    className={minimize?'burgerMenuProfileWrapperMin':'burgerMenuProfileWrapper'}
                    >
                    <NavLink to='/profile'>
                        <img 
                            className={minimize?'burgerMenuProfileIconMin':'burgerMenuProfileIcon'}
                            src={user.photo}/>
                    </NavLink>
                   {!minimize?<span>{user.firstName + ' ' + user.lastName}</span>:null}
                   <div className='burgerMenuProfileLinks'>
                        <NavLink to='/addPhoto'>
                            Add Photo
                        </NavLink>
                        <NavLink to='/'>
                            Log Out
                        </NavLink>
                   </div>
                </div>
            </div>
        )
    }
}
export default BurgerMenuProfile;