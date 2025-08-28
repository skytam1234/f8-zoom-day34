function Counter() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="title">Counter App</h1>
          <div className="preview">
            <h2
              className="preview-number"
              style={{
                color: value > 0 ? "green" : value < 0 ? "red" : "gray",
              }}
            >
              {value}
            </h2>
          </div>
          <div className="control">
            <div className="control-content">
              <div
                className="increase-btn"
                onClick={() => {
                  setValue(value + 1);
                }}
              >
                Tăng
              </div>
              <div
                className="reset-btn"
                onClick={() => {
                  setValue(0);
                }}
              >
                Bắt đầu
              </div>
              <div
                className="decrease-btn"
                onClick={() => {
                  setValue(value - 1);
                }}
              >
                Giảm
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const app = (
  <>
    <Counter />
  </>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(app);
