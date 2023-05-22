import { React, useContext } from "react";
import { Route, redirect } from "react-router-dom";
import { AuthContext } from "../Auth";

const PrivateRout = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routerProps) =>{
        if(currentUser) {
          return <RouteComponent {...routerProps} />
          
        } else {
          return redirect("/login")
        }
      }


      }
    />
  );
};

export default PrivateRout;
