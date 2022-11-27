import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Berlin" />
        <footer>
          This project is created by Estera Pietkiewicz and it is{" "}
          <a
            href="https://github.com/latin-bubel/react-weather-app-course"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
