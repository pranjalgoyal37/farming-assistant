export const BASE_URL = "http://127.0.0.1:8000"


export const API_PATH = {
    AUTH:{
        REGISTER:"/api/auth/register",
        LOGIN:"/api/auth/login",
        GET_PROFILE:"/api/auth/profile"
    },

    USERS:{
        GET_ALL_USERS:"/api/users", // get all users (admin only)
        GET_USER_BY_ID:(user_id)=>`/api/users/${user_id}`, // get users by id
        CREATE_USER: "/api/users",  // Create a new users (admin only)
        UPDATE_USER: (user_id)=>`api/users/${user_id}`, // update user details
        DELETE_USER:(user_id)=> `api/users/${user_id}`, // delete user
    },
}