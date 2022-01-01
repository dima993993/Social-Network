import { rerenderTree } from "./../render";

let state = {
  dialogsPage: {
    dialogs: [
      {
        id: "1",
        name: "Dima",
        img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
      },
      {
        id: "2",
        name: "Tanya",
        img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
      },
      {
        id: "3",
        name: "Vova",
        img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
      },
      {
        id: "4",
        name: "Vika",
        img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
      },
      {
        id: "5",
        name: "Serega",
        img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
      },
      {
        id: "6",
        name: "Nadya",
        img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
      },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "What do you do?" },
      { id: 4, message: "YoYoYo" },
    ],
  },
  profilePage: {
    posts: [
      { id: "1", message: "How are you?", likesCount: "12" },
      { id: "2", message: "I'm fine, and you?", likesCount: "23" },
      { id: "3", message: "I'm okey! Thanks.", likesCount: "30" },
    ],
  },
  sidebar: {
    friends: [
      {
        id: "1",
        name: "Dima",
        img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
      },
      {
        id: "2",
        name: "Tanya",
        img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
      },
      {
        id: "3",
        name: "Vova",
        img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
      },
    ],
  },
};

export let addPosts = (postMessage) => {
  let newPost = {
    id: "5",
    message: postMessage,
    likesCount: "0",
  };
  state.profilePage.posts.push(newPost);
  rerenderTree(state);
};

export let addMessages = (addMessage) => {
  let newMessage = {
    id: 10,
    message: addMessage,
  };
  state.dialogsPage.messages.push(newMessage);
  rerenderTree(state);
};

// let chengedPosts = () => {

// }

export default state;
