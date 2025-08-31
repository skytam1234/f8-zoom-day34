function Profile() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((user) => setUser(user))
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);
  return (
    <div className="container">
      {console.log(loading)}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="content">
          <div className="avatar-block">
            <img
              src="https://auvi.edu.vn/wp-content/uploads/2025/02/anh-avatar-dep-1.jpg"
              alt="Anh"
              className="avatar-img"
            />
          </div>
          <div className="info-block">
            <div className="info-name info-item">{user.name}</div>
            <div className="info-user info-item">{user.username}</div>
            <div className="info-email info-item">{user.email}</div>
            <div className="info-web info-item">{user.website}</div>
            <div className="info-contact info-item">
              <div className="info-contact-phone">{user.phone}</div>
              <div className="info-contact-address">
                {user.address.street},{user.address.city}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const app = (
  <>
    <a href="../index.html">Về trang chủ</a>
    <Profile />
  </>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(app);
