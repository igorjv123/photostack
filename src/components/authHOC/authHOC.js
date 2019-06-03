import React from 'react'

const AuthHOC = (Component) => {
    let user = {
        firstName: "Ihor",
        lastName: "Krutenko",
        email: "igorjv123@gmail.com",
        photo: "https://scontent.fdnk1-1.fna.fbcdn.net/v/t1.0-9/58381432_1525612477574208_482784367366635520_n.jpg?_nc_cat=108&_nc_ht=scontent.fdnk1-1.fna&oh=d6bd0e796de3d189f820e4c96547ca7a&oe=5D90782C",
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