import './App.css';
import Header from './Header/Header'
import MyProfilePage from "./Profile/MyProfilePage";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import Dialogs from "./Dialogs/Dialogs";

function App() {
  return (<div>
      <Header/>
      <div className="main-page-main-countent-wrapper">
          <NavigationMenu/>
          <Dialogs/>
          {/*<MyProfilePage/>*/}
      </div>

      </div>);
}

export default App;
