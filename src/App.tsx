import "./App.css";
import {
  FirstSlowComponent,
  SecondSlowComponent,
} from "./components/slowComponents";
import { RandomContent } from "./components/randomContent";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   document.body.setAttribute("data-theme", theme);
  // }, [theme]);

  return (
    <>
      <div>Hello World!</div>
      {/* <div className="theme-options">
        <ThemeOption theme="light" setTheme={setTheme} />
        <ThemeOption theme="dark" setTheme={setTheme} />
      </div> */}
      <ThemeSwitcher />
      <FirstSlowComponent />
      <RandomContent />
      <SecondSlowComponent />
    </>
  );
}

export default App;
