import { Color, HStack, Tabs } from "@chakra-ui/react";
import "./header.css"
import { Avatar } from "../ui/avatar";
import { useState } from "react";

const Header = () => {
    const [value, setValue] = useState<string | null>("first")
    return (
        // <header className="header">
        //     <div className="serech"></div>
        //     <div className="profile">    
        //         <div className="profile-main">
        //             <Avatar  name="Segun Adebayo" srcc="https://bit.ly/sage-adebayo" />
        //             <p className="name"></p>
        //         </div>
        //     </div>
        // </header>
        <div>
            <Tabs.Root defaultValue="1" variant="plain" className="ProductID_top-img">
                <Tabs.List rounded="l3" p="1" className="ProductID_top_sid-images">
                    <div>
                        <div className="ProductID_top_sid-images">
                            {images.map((image) => (
                                <Tabs.Trigger value={image.id.toString()} className="ProductID_top_sid-tabs">
                                    <img src={image.src} alt="salam" />
                                </Tabs.Trigger>
                            ))}
                        </div>
                    </div>
                </Tabs.List>
                <div className="ProductID_top_main-img">
                    {images.map((image) => (
                        <Tabs.Content value={image.id.toString()} className="ProductID_top_main-tabs">
                            <img src={image.src} alt="salam" />
                        </Tabs.Content>
                    ))}
                </div>
            </Tabs.Root>
        </div>
    )
}

export default Header;

const images = [
    {
        id: 1,
        src: "/images/test.jpg"
    },
    {
        id: 2,
        src: "/images/test.jpg"
    },
    {
        id: 3,
        src: "/images/test.jpg"
    },
    {
        id: 4,
        src: "/images/test.jpg"
    },
    {
        id: 5,
        src: "/images/test.jpg"
    },
    {
        id: 6,
        src: "/images/404.jpg"
    },
    {
        id: 7,
        src: "/images/404.jpg"
    },

]