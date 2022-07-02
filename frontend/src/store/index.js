import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

import instance from "@/configAxios";


export default new Vuex.Store( {
    plugins: [createPersistedState()],

    state: {
        user: '',
        token: '',
        status: '',
        post: "",
        posts: [],
        comment: "",
        comments: [],
        likes: [],
        userInfos:{},
        currentPost:{},
    },


    mutations: {
        setStatus: (state, status) => {
            state.status = status;
        },
        setCurrentPost: (state, status) => {
            state.currentPost = status;
        },
        logUser: (state, user) => {
            localStorage.setItem( 'token', user.token );
            state.user = user;
        },
        getUserInfosById: (state, userInfos) => {
            state.userInfos = userInfos;
        },
        editUser: (state, user) => {
            state.user = user
        },

        deleteUser: (state, user) => {
            state.user = user
        },
        setPost: (state, post) => {
            state.post = post
        },
        setPosts: (state, posts) => {

            state.posts = posts
        },
        editPost: (state, post) => {
            state.post = post
        },
        deletePost: (state, post) => {
            state.post = post
        },
        setComment: (state, comment) => {
            state.comment = comment
        },
        setComments: (state, comments) => {
            state.comments = comments
        },
        editComment: (state, comment) => {
            state.comment = comment
        },
        deleteComment: (state, comment) => {
            state.comment = comment
        },
        liked: (state, like) => {
            state.likes = like
        },
        disliked: (state, like) => {
            state.likes = like
        }


    },
    actions: {
        login: ({commit}, user) => {
            commit( 'setStatus' );
            return new Promise( (resolve, reject) => {

                instance.post( '/auth/login', user )
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
                console.log("ici")
                instance.post( '/auth/signup', user )
                    .then( (response) => {
                        commit( 'setStatus', 'created', '' );
                        commit( 'logUser', response.data );
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
                {
                    instance.post( 'auth/user', user )
                        .then( (response) => {
                            commit( 'getUserInfosById', response.data );
                            resolve( response );
                        } )
                        .catch( (error) => {
                            commit( 'getUserInfosById', {} );
                            reject( error );
                        } );
                }


            } );
        },

        editUser: ({commit}, user ) => {
            return new Promise( (resolve, reject) => {
                instance.put( 'auth/user/update/' ,user)
                    .then( (response) => {

                        commit( 'editUser', response.data );
                        commit('getUserInfosById');
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'editUser', {} );
                        reject( error );
                    } );
            } );
        },
        editPassword:  ({commit}, user ) => {
            return new Promise( (resolve, reject) => {
                instance.put( 'auth/userPassword' ,user)
                    .then( (response) => {

                        commit( 'editUser', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'editUser', {} );
                        reject( error );
                    } );
            } );
        },
        deleteUser: ({commit}, user ) => {

            return new Promise( (resolve, reject) => {
                console.log(user.id)
                instance.delete( '/auth/user/delete/'+ user.id, user)
                    .then( (response) => {
                        commit( 'deleteUser', response.data );
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

                instance.post( '/post/', post )
                    .then( (response) => {

                        commit( 'setPost', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setPost', {} );
                        reject( error );
                    } );
            } );
        },
        createCurrentPost: ({commit}, post) => {
            return new Promise( () => {
                commit("setCurrentPost", post)

            } );
        },

        getAllPosts: ({commit}) => {
            return new Promise( (resolve, reject) => {
                instance.get( '/post/post' )
                    .then( (response) => {

                        commit( 'setPosts', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setPosts', {} );
                        reject( error );
                    } );
            } );
        },

        modifyPost: ({commit}, currentPost) => {
            return new Promise( (resolve, reject) => {
                instance.put( '/post/post/update/', currentPost )
                    .then( (response) => {
                        commit( 'setPost', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setPost', {} );
                        reject( error );
                    } );
            } );
        },
        deletePost: ({commit}, postId) => {
            return new Promise( (resolve, reject) => {
                instance.delete( '/post/post/delete/' + postId )
                    .then( (response) => {
                        commit( 'deletePost', response.data );
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

                instance.post( '/comment/' + comment.postId, comment )
                    .then( (response) => {

                        commit( 'setComment', response.data );
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

                instance.delete( '/comment/' + comment.id )
                    .then( (response) => {

                        commit( 'deleteComment', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'deleteComment', {} );
                        reject( error );
                    } );
            } );
        },

        liked: ({commit}, likes) => {
            return new Promise( (resolve, reject) => {

                instance.post( '/post/post/likes/' + likes.postId )
                    .then( (response) => {

                        commit( 'setPost', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setPost', {} );
                        reject( error );
                    } );
            } );
        },
        disliked: ({commit}, likes,) => {
            return new Promise( (resolve, reject) => {

                instance.delete( '/post/post/likes/' + likes.postId )
                    .then( (response) => {

                        commit( 'setPost', response.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'setPost', {} );
                        reject( error );
                    } );
            } );
        },


    },
} )


