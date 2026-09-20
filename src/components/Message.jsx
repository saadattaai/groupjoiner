function Message({ item, currentUsername }) {
  const isMine =
    item.username === currentUsername;

  return (
    <div
      className={
        isMine
          ? "message-wrapper mine"
          : "message-wrapper"
      }
    >
      <div className="message">

        {!isMine && (
          <strong>
            {item.username}
          </strong>
        )}

        <p>{item.message}</p>

        <small>
          {item.time}
        </small>

      </div>
    </div>
  );
}

export default Message;