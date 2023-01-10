import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/v1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/v1' element={<HomePage />} />
        <Route
          path="/"
          element={<Navigate to="/v1" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
