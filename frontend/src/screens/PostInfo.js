import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { addComments, getPost } from '../Actions/postActions'
import { ADD_COMMENT_RESET, FETCH_POST_RESET } from '../constants/postConstants'
import '../css/postinfo.css'
import Posts from './Posts'

const Index = ({match , history}) => {

  const dispatch = useDispatch();

  const id = match.params.id;

  const Post = useSelector(state => state.post);
  const {loading , post} = Post;


  const AddComment = useSelector(state => state.addComment);
  const {loading : loadingComment , success} = AddComment;

  const userData = useSelector(state => state.authUser.userData);

  const [name , setName] = useState('');
  const [comment , setComment] = useState('');


  useEffect(
    () => {

      if(!userData){
        history.push('/admin/login');
      } else {
          if(success) {
          dispatch(getPost(id));
          dispatch({type : ADD_COMMENT_RESET});
          setName('');
          setComment('');
        } else {
          if(!post || id !==post._id){
            dispatch(getPost(id));
          }
        }
      }
    }
  , [dispatch , post , id , success])

  const addCommentHandler = () => {
    dispatch(addComments(post._id , {name , comment}));
  }

  return (
    !loading && 
    
          <section id="posts-page">
      <div className="go-back">
        <Link to="/"><i className="fas fa-arrow-alt-circle-left" /> GO BACK</Link>
      </div>
      <div className="posts-main">
        <div className="image-container">
          <img style={{height : "350px"}} src={`http://localhost:5000/${post.image}`} />
        </div>
        <div className="details-container">
          <div className="content">
            <div className="title">
              Title : {post.title}
              <div className="title-down">
                <p className="author"><i className="fas fa-user"></i> {post.author}</p>
                <p className="date"><i className="fas fa-calendar-day"> {post.date.substring(0,10)}</i></p>
              </div>
            </div>
            <hr />
            <div className="cook-time sec">
              <p>Cook Time : <i className="fas fa-clock"></i> {post.cookTime.split(':')[0]}hr {post.cookTime.split(':')[1]}hr</p>
            </div>
            <hr />
            <div className="servings sec">
              <p>Servings : {post.servings}</p>
            </div>
            <hr />
            <div className="ingredients">
              <p>ingredients  :</p>
              <ul>
                {post.ingredients.split(',').map(ind => <li key={ind}>{ind}</li>)}
              </ul>
            </div>
            </div>
        </div>
      </div>
      <div className="procedure">
        <p style={{fontSize : "1.3rem",margin : "10px"}}>Procedure : </p>
        {post.procedure.split('=').map(para => (<p key={para}><span className="number">{para.substring(0 , 1)}</span> {para.substring(1,)}  </p> ))}<hr />
      </div>
      <div className="display-comments">
        <p className="comments-section">Comments</p>
        {post.comments.map(comment => (
          <>
          <div key={comment._id} className="comment-container">
            <p className="comment-name"><i className="fas fa-user"></i> {comment.name}</p>
            <p className="comment-comment">{comment.comment}</p>
          </div> <hr /> </>
        ))}
      </div>
      <div className="addComments">
        <p className="add-comment-p">Add a new comment</p>
        <label className="Comments-label">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        <label className="Comments-label">Comments</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comments"></textarea>
        <button onClick={addCommentHandler} className="btn-comment">Add Comment</button>
      </div>
      <hr />
    </section>

  )
}

export default Index
