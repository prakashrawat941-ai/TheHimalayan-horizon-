import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="villages" element={<PlaceholderPage titleKey="villages" />} />
        <Route path="homestays" element={<PlaceholderPage titleKey="homestays" />} />
        <Route path="plan" element={<PlaceholderPage titleKey="plan" />} />
        <Route path="contact" element={<PlaceholderPage titleKey="contact" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
