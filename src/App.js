import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import Question1 from "./component/Question1/Question1";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Shop></Shop>
            <Question1></Question1>
        </div>
    );
}

export default App;
