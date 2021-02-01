import {combineReducers} from 'redux';
import { addCommentReducer, addPostReducer, deletePostReducer, editPostReducer, fetchPostReducer, fetchPostsReducer } from './postReducers';
import { addUserReducer, authUserReducer, deleteUserReducer, editUserReducer, fetchUserReducer, fetchUsersReducer } from './userReducers';

const reducers = combineReducers({
    allPosts : fetchPostsReducer,
    post : fetchPostReducer,
    deletePost : deletePostReducer,
    editPost : editPostReducer,
    addPost : addPostReducer,
    allUsers : fetchUsersReducer,
    user : fetchUserReducer,
    deleteUser : deleteUserReducer,
    editUser : editUserReducer,
    addUser : addUserReducer,
    addComment : addCommentReducer ,
    authUser : authUserReducer,
    
});

export default reducers