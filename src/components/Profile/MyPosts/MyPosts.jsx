import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import { NavLink } from "react-router-dom";

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} id={post.id} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef(); // Получить обьект созданный с помощью конструктора React

  let addPost = () => {
    let text = newPostElement.current.value; // current - получить ссылку у данного обьекта, и взять его value
    props.addPost(text);
    newPostElement.current.value = ""; // занулить значение value для того что текстовое поле после добавления поста обнулялось
  };

  return (
    <div>
      <h4>My Posts</h4>
      <div>
        <div>
          <textarea
            className={style.textAreaPost}
            ref={newPostElement}
          ></textarea>
        </div>
        <div className={style.wrapper_btn_post}>
          <NavLink to='#' className={style.btn_post} onClick={addPost}>
            Добавить пост
          </NavLink>
        </div>
      </div>
      <div className={style.wrapper_posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
