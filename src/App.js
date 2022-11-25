import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project is created by Estera Pietkiewicz and it is{" "}
          <a
            href="https://github.com/latin-bubel/react-weather-app-course"
            target="_blank"
          >
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
