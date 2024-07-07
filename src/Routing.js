import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App"
import { Inventory } from "./pages/en/Inventory";
import { Rent } from "./pages/en/Rent";
import { Contact } from "./pages/en/Contact";



export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="">
                    <Route index element={<App />}></Route>
                    <Route path="/en/inventory" element={<Inventory />}></Route>
                    <Route path="/en/Rent" element={<Rent />}></Route>
                    <Route path="/en/Contact" element={<Contact />}></Route>
                </Route>
                <Route path="/fr">
                    <Route path="/fr/" element={<App />}></Route>
                    <Route path="/fr/inventory" element={<Inventory />}></Route>
                    <Route path="/fr/Rent" element={<Rent />}></Route>
                    <Route path="/fr/Contact" element={<Contact />}></Route>
                </Route>
                
            </Routes>
        </Router>
    );
}