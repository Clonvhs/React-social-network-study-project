import './App.css';
import Header from './Header'
import MyProfilePage from "./MyProfilePage";
import NavigationMenu from "./NavigationMenu";

function App() {
  return (<div>
      <Header/>
      <div className="main-page-main-countent-wrapper">
          <NavigationMenu/>
          <MyProfilePage/>
      </div>

      </div>);
}

export default App;
