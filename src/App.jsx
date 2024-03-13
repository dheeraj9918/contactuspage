import "./App.css";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import FormSection from "./components/FormSection/FormSection";
import Nevigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Nevigation />
      <div className="form-container">
      <ContactInfo/>
      <FormSection/>
      </div>
      
    </div>
  );
}

export default App;
