import style from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem";
import MessageItems from "./MessageItem/MessageItem";
import { NavLink } from "react-router-dom";
import React from "react";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((dialog) => (
    <DialogsItems id={dialog.id} name={dialog.name} img={dialog.img} />
  ));
  let messageElements = props.state.messages.map((message) => (
    <MessageItems id={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    props.addMessages(text);
    newMessageElement.current.value = "";
  };
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogElements}</div>
      <div>
        <div className={style.messages}>{messageElements}</div>
        <div>
          <textarea
            className={style.messageArea}
            ref={newMessageElement}
          ></textarea>
          <div className={style.addMessage_wrapper}>
            <NavLink
              to='qwerwetewrt'
              className={style.addMessage}
              onClick={addMessage}
            >
              Отправить сообщение
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
