import React from 'react'

class PhotoHOC extends React.Component {
    constructor(Component){
        super();
        this.Component = Component;
    }
    render(){
        let photoId = 'qqq'
        let Component = this.Component;
        return(
            class extends React.Component{
                render(){
                    return <Component photo={photoId} {...this.props}/>
                }
            }
        )
    }
    
}
export default PhotoHOC;