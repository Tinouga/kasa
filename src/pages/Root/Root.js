import {Outlet} from "react-router-dom";
import useLayout from "../../useLayout";

const Root = () => useLayout(<Outlet/>);

export default Root;
