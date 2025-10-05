import { Routes, Route, Navigate } from "react-router-dom";
import CounterButton from "./CounterButton";
import Greeting from "./Greeting";
import FruitList from "./FruitList";
import FormInput from "./FormInput";
import HeaderDisplay from "./HeaderDisplay";
import Tasks from "./Tasks";



function AppRoutes() {
    const pageTitle = "HelaPesa React Tasks";
  
  return (
    <Routes>
      
      <Route path="/counterbutton" element={<CounterButton />} />
      <Route path="/greeting" element={<Greeting />} />
      <Route path="/fruitlist" element={<FruitList />} />
      <Route path="/forminput" element={<FormInput />} />
      <Route path="/headerdisplay" element={<HeaderDisplay title={pageTitle} />} />
      <Route path="/tasks" element={<Tasks />} />

    
    </Routes>
  );
}
export default AppRoutes;