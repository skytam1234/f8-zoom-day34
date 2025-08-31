function Comment() {
  const [comments, setComments] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [content, setContent] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  let idKey = 1;
  function hangdleComments(e) {
    e.preventDefault();
    setComments([
      ...comments,
      { id: idKey, name: name, email: email, body: content },
    ]);
    setName("");
    setEmail("");
    setContent("");
  }

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((comments) => setComments(comments))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const length = comments.length + 1;

  return (
    <>
      <form className="form" onSubmit={hangdleComments}>
        <span className="input">
          <input
            type="text"
            name="name"
            placeholder="Nhập tên của bạn..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Nhập email của bạn..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </span>
        <textarea
          name="body"
          rows="{4}"
          placeholder="Nội dung bình luận..."
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <button className="btn" type="submit">
          gửi bình luận
        </button>
      </form>
      <div className="container">
        {comments.map((comment) => {
          idKey++;
          return (
            <div className="comment" key={comment.id}>
              <div className="comment-wapper">
                <div className="comment-content">
                  <img
                    src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
                    alt={comment.postId}
                  />
                  <div className="information">
                    <div className="content">
                      <h3>{comment.name}</h3>
                      <span className="email">{comment.email}</span>
                      <span className="time">
                        `{length - comment.id} phút trước`
                      </span>
                    </div>
                    <p className="title">{comment.body}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
const app = (
  <>
    <a href="../index.html">Về trang chủ</a>
    <Comment />
  </>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(app);
