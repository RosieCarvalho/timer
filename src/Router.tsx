import { Route, Routes } from "react-router-dom";
import { History } from "./pages/History";

import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      {/* define um layout padrão para as paginas */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
