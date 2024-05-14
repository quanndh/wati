import "./App.css";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import ConnectAccountPage from "./pages/ConnectAccount";

function App() {
  return (
    <div id="app">
      <Header />
      <PageHeader />
      <ConnectAccountPage />
    </div>
  );
}

export default App;
