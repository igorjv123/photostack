import React from 'react'

const AuthHOC = (Component) => {
    let user = {
        firstName: "Ihor",
        lastName: "Krutenko",
        email: "igorjv123@gmail.com",
        photo: null,
        createdAt: "2019-05-22T12:37:47.559Z",
        _id: "5ce5429b4e38b338f0b6cee0"
    }
    return(
        class extends React.Component{
            render(){
                return <Component user={user} {...this.props}/>
            }
        }
        
    )
}
export default AuthHOC;