import './App.css';
import Header from './Header'
import Content from "./Content";
import NavigationMenu from "./NavigationMenu";

function App() {
  return (<div>
      <Header/>
      <div className="main-page-main-countent-wrapper">
          <NavigationMenu/>
          <Content/>
      </div>

      </div>);
}

export default App;
