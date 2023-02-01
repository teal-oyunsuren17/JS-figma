import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";
import { SignUp } from "./Sign-Up/signUp";

function App() {
  return (
    <div>
      <Header />
      <Section />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
