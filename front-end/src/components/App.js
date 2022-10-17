import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomStudents from "./RandomStudents";
import AllStudents from "./AllStudents";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RandomStudents />} />
				<Route path="/all" element={<AllStudents />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
