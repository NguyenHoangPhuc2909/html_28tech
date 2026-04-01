import routes  from "../../Routes";
import { useRoutes } from "react-router";

function AllRoutes(){
    const elements = useRoutes(routes);
    return (
        <>
            {elements}
        </>
    );
};

export default AllRoutes