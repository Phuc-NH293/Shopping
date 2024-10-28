import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DefauComponent from "./components/DefauComponent/DefauComponent";
import { routes } from "./routes";

function App() {
  return (
    <div>
      
     <Routes>
        {routes.map((route, index) => {
          const Page = route.page;
          const Layout = route.isShowHeader ? DefauComponent : Fragment
          return (
            <Route 
              key={index} 
              path={route.path} 
              element={
              <Layout>
                <Page />
                </Layout>} 
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;