import {Route} from "react-router-dom";
import Header from "./Header";
import {Main} from "./Main";
import Sidebar from "./Sidebar";
import Dashboard from '../pages/Dashboard';
import Forms from "../pages/Forms";
import Buttons from "../pages/Buttons";
import Cards from "../pages/Cards";
import Charts from "../pages/Charts";
import Tables from "../pages/Tables";
import Modals from "../pages/Modals";

function Layout(){
    return (
       <div className="flex flex-row h-screen">
        <Sidebar/>
        <main className="flex flex-col w-full">
            <Header/>
            <Main>
                <Route
                    exact={true}
                    path={`/app/dashboard`}
                    component={Dashboard}
                />
                <Route
                    exact={true}
                    path={`/app/forms`}
                    component={Forms}
                />
                <Route
                    exact={true}
                    path={`/app/buttons`}
                    component={Buttons}
                />                
                <Route
                    exact={true}
                    path={`/app/cards`}
                    component={Cards}
                />
                <Route
                    exact={true}
                    path={`/app/charts`}
                    component={Charts}
                />   
                <Route
                    exact={true}
                    path={`/app/modals`}
                    component={Modals}
                />                          
                <Route
                    exact={true}
                    path={`/app/tables`}
                    component={Tables}
                />                               
            </Main>
        </main>
       </div>
    )
}

export default Layout;