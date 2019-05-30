import React from 'react'
import './style.scss'
class Pagination extends React.Component{
    render(){
        let items = []
        const len = parseInt(this.props.amount/10)+1
        for(let i = 1; i < len + 1; i++){
            items.push(i)
        }   
        const active = this.props.active?this.props.active:1
        return(
            <div className='paginationContainer'>
                {items.map((item)=>
                    <span 
                        className={`paginationItem${active===item?' activeItem':''}`} 
                        onClick={()=>this.props.onClick(item)} 
                        key={item} 
                        id={item}>
                            {item}
                    </span>
                )}
            </div>
        )
    }
} 
export default Pagination;