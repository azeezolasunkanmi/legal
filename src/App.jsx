import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Root from "./pages/Root";
import ForLegalFirms from "./pages/ForLegalFirms";
import PractitionerProfile from "./pages/PractitionerProfile";
import Consult from "./pages/Consult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "legalFirm", element: <ForLegalFirms /> },
      { path: "practitionerProfile", element: <PractitionerProfile /> },
      { path: "consult", element: <Consult /> },
    ],
  },
  { path: "auth", element: <Authentication /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
