import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NeonAnim from "./components/NeonAnim";

function App() {
	return (
		<>
			<main  className="flex items-center  bg-gry-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1200px] h-[400px]">
				<Header />
				<Routes>
					<Route path="/neon-anims" element={<NeonAnim/>} />
					<Route path="/about" element={<h1>About</h1>} />
				</Routes>
			</main>
		</>
	);
}

export default App;
