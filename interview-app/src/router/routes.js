import About from "../pages/About";
import Graph from "../pages/Graph";
import TablePostsPage from "../pages/TablePostsPage";

export const routes = [
    { path: "/about", component: < About / > , exact: true },
    { path: "/posts", component: < TablePostsPage / > , exact: true },
    { path: "/graph", component: < Graph / > , exact: true },
];