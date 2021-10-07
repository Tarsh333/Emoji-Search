import { useEffect, useState } from "react"
import axios from 'axios'
import Emoji from "./Emoji"
const App = () => {
    const [emojis, setEmojis] = useState(null)
    const [input, setInput] = useState('')
    useEffect(() => {
        let cancel
        axios({
          method: 'GET',
          url: `https://emoji-api.com/emojis?search=${input}&access_key=79ddd798d4dd43d09e86d4b1136af85839035e84`,
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
          // console.log(res.data);
          setEmojis(res.data)
        }).catch(e => {
          if (axios.isCancel(e)) return
          // console.log(e);
        })
        return () => cancel()
      }, [input])
    // useEffect(()=>{
    //     console.log(emojis);
    // },[emojis])

    return (
        <div className="App">
            <h1>🕵️</h1>
            <h1>Search Emojis</h1>
            <div className="input"><input type="text" placeholder="Search an Emoji" onChange={(e)=>{setInput(e.target.value)}} value={input}/></div>
            <div className="emojis">
            {emojis&&emojis.map((data)=><Emoji data={data}/>)}</div>
            {!emojis && input.length>0 && <h1>No results found</h1>}
        </div>
    )
}

export default App

