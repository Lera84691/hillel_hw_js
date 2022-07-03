function ListItem(props) {
  return (
    <li className="item-wrapper" id={props.id}>
      <div className="item-inner">
        <button onClick={() => {props.deleteHandler(props.id)}} className="item-delete-btn">
            <span className="line"></span>
            <span className="line"></span>
        </button>
        <div className="item-user">{props.userId}</div>
        <div className="item-text-wrapper">
          <div className="item-title">{props.title}</div>
          <div className="item-text">{props.text}</div>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
