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
        getUserInfos: (state, userInfos) => {
            state.userInfos = userInfos;
        },
        logout: (state)=> {
            state.userInfos = {}
        }
    },
    actions: {
        login: ({commit}, userInfos) => {
            commit( 'setStatus' );
            return new Promise( (resolve, reject) => {
                console.log( userInfos )
                instance.post( '/login', userInfos )
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
        signup: ({commit}, userInfos) => {
            commit( 'setStatus' );
            return new Promise( (resolve, reject) => {
                console.log( userInfos )
                instance.post( '/signup', userInfos )
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
        getUserInfos: ({commit}, userInfos) => {
            return new Promise( (resolve, reject) => {
                console.log( userInfos )
                instance.post( '/user', userInfos )
                    .then( (response) => {
                        console.log(response)
                        commit( 'getUserInfos', response.data.data );
                        resolve( response );
                    } )
                    .catch( (error) => {
                        commit( 'getUserInfos', {} );
                        reject( error );
                    } );
            } );
        },
        logout:  () =>{
            localStorage.removeItem('user')
        }
    },
} )


