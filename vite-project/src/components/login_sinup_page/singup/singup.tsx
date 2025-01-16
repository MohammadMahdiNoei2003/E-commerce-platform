import { memo } from "react";
import ISingup from "./singup.type";
import { Button, Input } from "@chakra-ui/react";

import "./singup.css"


const Singup = (props: ISingup) => {



    return (
        <div style={{ height: "100%", width: "100%" }}>

            <div className="Singup">
                <div className="container-form">






                    <div className="bul blue">
                        <div className="star ">
                            <div className="MBul bul1"></div>
                            <div className="MBul bul2"></div>
                            <div className="MBul bul3"></div>
                            <div className="MBul bul4"></div>
                        </div>
                    </div>
                    <div className="bul red">
                        <div className="star">
                            <div className="MBul bul1"></div>
                            <div className="MBul bul2"></div>
                            <div className="MBul bul3"></div>
                            <div className="MBul bul4"></div>
                        </div></div>
                    <div className="form">
                        <h2 className="form-header">Singup</h2>
                        <Input placeholder="name" className="form-input" type="text" />
                        <Input placeholder="password" className="form-input" type="password" />
                        <Button type="submit" className="form-but" >Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Singup);
