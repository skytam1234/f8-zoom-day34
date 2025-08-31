function Products() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [product, setProduct] = React.useState({});

  function renderDetail(id) {
    const detail = document.querySelector(".overlay");
    const product1 = products.filter((p) => p.id == id);
    detail.classList.add("show");
    setProduct(product1[0]);
  }
  const handleOverlay = (e) => {
    const detailCard = e.target.closest(".detail-card");
    const detail = document.querySelector(".overlay");
    if (!detailCard) {
      detail.classList.remove("show");
    }
  };
  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
        .then((res) => res.json())
        .then((products) => setProducts(products))
        .finally(() => {
          setLoading(false);
        });
    }, 0);
  }, []);
  return (
    <>
      <div className="product-grid">
        {loading && <div>Loading...</div>}
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <h2>{product.title}</h2>
              <p>
                {product.body.length < 101
                  ? product.body
                  : product.body.substring(0, 100)}
              </p>
              <button
                className="detail-btn"
                onClick={() => {
                  renderDetail(product.id);
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          );
        })}
      </div>

      <div className="overlay" onClick={handleOverlay}>
        <div className="detail-container">
          <div className="detail-card">
            <h2 className="detail-title">{product.title}</h2>
            <p className="detail-body">{product.body}</p>
            <div className="detail-meta">
              <span>Mã sản phẩm: #1</span>
              <span>Người đăng: User 1</span>
            </div>
            <a href="" className="back-button">
              ← Quay lại danh sách
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
const app = (
  <>
    <a href="../index.html">Về trang chủ</a>
    <Products />
  </>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(app);
