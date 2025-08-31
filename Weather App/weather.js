function Weather() {
  const [weathers, setWeathers] = React.useState([]);
  const weatherData = [
    { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
    { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
    { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
  ];
  const handleIcon = (weather) => {
    switch (weather) {
      case "Nắng":
        return <i className="fa-regular fa-sun"></i>;
      case "Có mây":
        return <i className="fa-solid fa-cloud"></i>;
      case "Mưa nhẹ":
        return <i className="fa-solid fa-cloud-rain"></i>;
    }
  };
  const [weather, setWeather] = React.useState(weatherData[0]);
  function fetchWeather(e) {
    setWeather(weatherData[Number(e.target.value)]);
  }
  function hangdleReset() {
    let value = 0;
    const rundom = Math.round(Math.random() * 5);
    const check = Math.random();
    check > 0.5 ? (value = rundom) : (value = rundom * -1);
    const weatherNew = { ...weather };
    weatherNew.humidity = Number(weatherNew.humidity) + value;
    setWeather(weatherNew);
  }
  React.useEffect(() => {
    setWeathers(weatherData);
  }, []);

  return (
    <div className="wrap-weather">
      <div className="weather">
        <div
          className="weather-item"
          onChange={(e) => {
            fetchWeather(e);
          }}
        >
          <div className="selected">
            <select className="weather-select">
              {weathers.map((weather, index) => {
                return (
                  <option value={index} key={index}>
                    {weather.city}
                  </option>
                );
              })}
            </select>
            <button onClick={hangdleReset}>Làm mới</button>
          </div>
        </div>

        <div className="weather-item">
          <div>
            <p>{weather.city}</p>
            <div>{handleIcon(weather.weather)}</div>
            <h1>{weather.temp} °C</h1>
            <p>{weather.weather}</p>
            <p>Độ ẩm: {weather.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
const app = (
  <>
    <a href="../index.html">Về trang chủ</a>
    <Weather />
  </>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(app);
