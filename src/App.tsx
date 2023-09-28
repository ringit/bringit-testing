import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Paths } from "./constants/Paths";

const Welcome = lazy(() => import("@/pages/welcome/Welcome"));
const Counter = lazy(() => import("@/pages/counter/Counter"));
const Layout = lazy(() => import("@/components/Layout"));
const Login = lazy(() => import("@/pages/login/Login"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path={Paths.COUNTER}
          element={
            <Layout>
              <Counter />
            </Layout>
          }
        />
        <Route
          path={Paths.LOGIN}
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
