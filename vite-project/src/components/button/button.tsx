import { memo } from "react"
import IButton from "./button.type"
import "./butten.css";

const Button = (props : IButton)=>{
    const {text = "Submit", onClick = ()=>{}, bool = true} = props
    
    
    return(
        <div onClick={onClick} className="button"  >
            <button className={bool ? "button-but but1":"button-but but2"}>
                <i className="fas fa-arrow-right button-icon"></i>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="button-icon"><path fill="currentColor" fill-rule="evenodd" d="M12.522 4.25 20 12l-7.478 7.75-.733-.709 6.302-6.531H4v-1.02h14.09L11.79 4.959z" clip-rule="evenodd"></path></svg> */}
                <span className="button-txt">{text}</span>
            </button>
        </div>
    )
}

export default memo(Button)