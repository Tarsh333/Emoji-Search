import { useState } from "react";

const Emoji = ({data}) => {
    const copyText=()=>{
        navigator.clipboard.writeText(data.character);
        setText('✔️ Copied to clipboard')
        setTimeout(function(){ setText('📋 Copy to clipboard')}, 2000);
    }
    const [text, setText] = useState('📋 Copy to clipboard')
    return (
        <div className="emoji" onClick={copyText}>
            <span>{data.character} {data.unicodeName}</span>
            <span className="text">{text}</span>
        </div>
    )
}

export default Emoji
