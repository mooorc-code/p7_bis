import Vuex from 'vuex'

const axios = require( 'axios' )
import createPersistedState from 'vuex-persistedstate';

const instance = axios.create( {
    baseURL: 'http://localhost:5000/api/auth/'
} );

let user = localStorage.getItem( 'user' );
if (!user) {
    user = {
        userId: {},
        token: '',
    };
} else {
    try {
        user = JSON.parse( user );
        instance.defaults.headers.common['Authorization'] = user.token;
    } catch (ex) {
        user = {
            userId: {},
            token: '',
        };
    }
}


// créer une instance
export default new Vuex.Store( {
    plugins: [createPersistedState()],

    state: {
        status: '',
        user: user,
        userInfos: {
            email: '',
            nom: '',
            prenom: '',
            poste: '',
            password: '',
            avatar: '',
        },
        post: "",
        posts: [],
        comment: "",
        comments: [],
    },


    mutations: {
        setStatus: (state, status) => {
            state.status = status;
        },
        logUser: (state, user) => {
            instance.defaults.headers.common['Authorization'] = user.token;
            localStorage.setItem( 'user', JSON.stringify( user ) );
            state.user = user;
        },
        getUserInfosById: (state, userInfos) => {
            state.userInfos = userInfos;
        },
        editUser: (state, userInfos) => {
            state.userInfos = userInfos
        },
        deleteUser: (state, userInfos) => {
            state.userInfos = userInfos
        },
        setPost: (state, post) => {
            state.post = post
        },
        setPosts: (state, posts) => {
            console.log(posts);
            state.posts = posts
        },
        editPost: (state, post) => {
            state.post = post
        },
        deletePost: (state, post) => {
            state.post = post
        },
        setComment : (state, comment) =>{
            state.comment = comment
        },
        setComments : (state, comments) =>{
            state.comments = comments
        },
        editComment : (state, comment) =>{
            state.comment = comment
        },
        deleteComment : (state, comment) =>{
            state.comment = comment
        },
        logout: (state) => {
            state.userInfos = {}
        },



    },
    actions: {
        login: ({commit}, user) => {
            commit( 'setStatus' );
            return new Promise( (resolve, reject) => {
                console.log( user )
                instance.post( '/login', user )
                    .then( (response) => {
                        commit( 'setStatus', '' );
                        commit( 'logUser', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setStatus', 'error_login' );
                        reject( error );
                    } );
            } );
        },
        signup: ({commit}, user) => {
            commit( 'setStatus' );
            return new Promise( (resolve, reject) => {
                console.log( user )
                instance.post( '/signup', user )
                    .then( (response) => {
                        commit( 'setStatus', 'created' );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setStatus', 'error_create' );
                        reject( error );
                    } );
            } );
        },
        getUserInfosById: ({commit}, user) => {
            return new Promise( (resolve, reject) => {
                console.log( user )
                instance.post( '/user', user )
                    .then( (response) => {
                        console.log( response )
                        commit( 'getUserInfosById', response.data.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'getUserInfosById', {} );
                        reject( error );
                    } );
            } );
        },
        editUser: ({commit}, userInfos) => {
            return new Promise( (resolve, reject) => {
                console.log( userInfos )
                axios.put( 'http://localhost:5000/api/user/user/'+ userInfos.id, userInfos, {headers: {'Authorization': 'Bearer ' + user.token}} )
                    .then( (response) => {
                        console.log( response )
                        commit( 'editUser', response.data.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'editUser', {} );
                        reject( error );
                    } );
            } );
        },
        deleteUser: ({commit}, userInfos) => {
            return new Promise( (resolve, reject) => {
                console.log( userInfos )
                axios.delete( 'http://localhost:5000/api/user/user' + this.id ,{headers: {'Authorization': 'Bearer ' + user.token}} )
                    .then( (response) => {
                        console.log( response )
                        commit( 'deleteUser', response.data.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'deleteUser', {} );
                        reject( error );
                    } );
            } );
        },


        createPost: ({commit}, post) => {
            return new Promise( (resolve, reject) => {
                console.log( post )
                axios.post( 'http://localhost:5000/api/post', post, {headers: {'Authorization': 'Bearer ' + user.token}} )
                    .then( (response) => {
                        console.log( response )
                        commit( 'setPost', response.data.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setPost', {} );
                        reject( error );
                    } );
            } );
        },

        getAllPosts: ({commit}) => {
            return new Promise( (resolve, reject) => {

                axios.get( 'http://localhost:5000/api/post/post', {headers: {'Authorization': 'Bearer ' + user.token}} )
                    .then( (response) => {
                        console.log( response )
                        commit( 'setPosts', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setPosts', {} );
                        reject( error );
                    } );
            } );
        },
        deletePost: ({commit}, post) => {
            return new Promise( (resolve, reject) => {
                axios.delete( 'http://localhost:5000/api/post/post/' + post.id ,{headers: {'Authorization': 'Bearer ' + user.token}} )
                    .then( (response) => {
                        console.log( response )
                        commit( 'deletePost', response.data.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'deletePost', {} );
                        reject( error );
                    } );
            } );
        },

        createComment: ({commit}, comment) => {
            return new Promise( (resolve, reject) => {
                console.log( comment )
                axios.post( 'http://localhost:5000/api/comment/'+ comment.postId, comment,  {headers: {'Authorization': 'Bearer ' + user.token}} )
                    .then( (response) => {
                        console.log( response )
                        commit( 'setComment', response.data.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setComment', {} );
                        reject( error );
                    } );
            } );
        },

        deleteComment: ({commit}, comment) => {
            return new Promise( (resolve, reject) => {
                console.log( comment )
                axios.delete( 'http://localhost:5000/api/comment/' + comment.id ,{headers: {'Authorization': 'Bearer ' + user.token}} )
                    .then( (response) => {
                        console.log( response )
                        commit( 'deleteComment', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'deleteComment', {} );
                        reject( error );
                    } );
            } );
        },

        logout: () => {
            localStorage.removeItem( 'user' )
        }
    },
} )


