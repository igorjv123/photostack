const state = {
    login: {
        email: "",
        password: "",
        error: "",
        loginSuccess: false
    },
    registration: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    },
    images:{
        data:[],
        dataLength: null
    },
    filter:{
        tags:[],
        date:'all'
    },
    comments: null,
    newComment:null,
    searchQuery: '',
    mark: {
        mark:null,
        amount:null
    },
    tags:[
        'Sea',
        'Automobiles',
        'Mountains',
        'Nature',
        'Children', 
        'People', 
        'City', 
        'Sport', 
        'Rest'
    ],
    deletePhoto:{
        
    }
}
export default state;