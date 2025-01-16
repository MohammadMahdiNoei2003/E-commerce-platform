import { memo} from "react";
import ILogin from "./login.type";
import { Button, Input } from "@chakra-ui/react";

import "./login.css"


const Login = (props: ILogin) => {



    return (
        <div style={{ height: "100%", width: "100%" }}>

            <div className="login">
                <div className="container-form">
                    <div className="bul blue"></div>
                    <div className="bul red"></div>
                    <div className="form">
                        <h2 className="form-header">Login</h2>
                        <Input placeholder="name" className="form-input" type="text" />
                        <Input placeholder="password" className="form-input" type="password" />
                        <Button type="submit" className="form-but" >Submit</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Login);
