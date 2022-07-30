import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul class="menu container">
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/news">News</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>

                <div class="container">
                    <h3>Home page</h3>
                </div>
            </div>
        </div>
    );
}

export default App;
