import { BrowerRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';

function App() {
  return (
    {/* To use react router dom will need to wrap whole react app with browser router */}
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
  );
}

export default App;