import "./index.css";
import state from "./redux/state";
import { rerenderTree } from "./render";

// рендерит приложение первый раз (при обновлении страницы)

rerenderTree(state);
