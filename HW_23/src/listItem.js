import { useState, useEffect, useRef } from "react";

function ListItem(props) {
  const [itemData, setItemData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const titleRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    setItemData({
      userId: props.userId,
      id: props.id,
      title: props.title,
      body: props.text,
    });
  }, []);

  return (
    !!itemData && (
      <li className="item-wrapper" id={itemData.id}>
        <div className="item-inner">
          <button
            onClick={() => {
              props.deleteHandler(itemData.id);
            }}
            className="item-delete-btn"
          >
            <span className="line"></span>
            <span className="line"></span>
          </button>
          {!isEdit ? (
            <button
              onClick={() => {
                setIsEdit(!isEdit);
              }}
              className="item-edit-btn"
            >
              edit
            </button>
          ) : (
            <button
              onClick={() => {
                setIsEdit(!isEdit);
                props.editHandler(itemData.id, itemData.title, itemData.body);
              }}
              className="item-edit-btn"
            >
              <div className="item-edit-btn-submit">✔</div>
            </button>
          )}
          <div className="item-user">{itemData.userId}</div>
          <div className="item-text-wrapper">
            {!isEdit ? (
              <>
              <div className="item-title">{itemData.title}</div>
              <div className="item-text">{itemData.body}</div>
              </>
            ) : (
              <>
                <textarea
                  onChange={(event) => {
                    setItemData({
                      ...itemData,
                      title: event.target.value,
                    });
                  }}
                  value={itemData.title}
                  className="item-title item-textarea"
                  ref={titleRef}
                ></textarea>
                <textarea
                  onChange={(event) => {
                    setItemData({
                      ...itemData,
                      body: event.target.value,
                    });
                  }}
                  value={itemData.body}
                  className="item-text item-textarea"
                  ref={bodyRef}
                ></textarea>
              </>
            )}
          </div>
        </div>
      </li>
    )
  );
}

export default ListItem;
