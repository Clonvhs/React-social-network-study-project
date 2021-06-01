import './App.css';
import Header from './Header/Header'
import MyProfilePage from "./Profile/MyProfilePage";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (<BrowserRouter>
        <div>
            <Header/>
            <div className="main-page-main-content-wrapper">
                <NavigationMenu/>
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/profile' component={MyProfilePage} />
            </div>

        </div>
    </BrowserRouter>);
}

export default App;
