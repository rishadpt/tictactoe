import { useState } from "react"
import  Square  from "../components/Square"
import Style from  "../styles/Home.module.css"

export const Board = () => {
    const [squares,setSquares] = useState(Array(9).fill(null))
    const [currentplayer,setCurrentplayer] = useState<"X" | "O">(
        Math.round(Math.random() * 1) === 1 ? "X":"O")
    const [winner,setWinner] = useState(null)

    function setSquarevalue(index: number, ){
        const newData = squares.map((val:string,i:number)=> { if(i===index){
           return currentplayer}
            return val
        })
        setSquares(newData)
        setCurrentplayer(currentplayer === "X" ? "O" : "X")
}
    
    return (
        <div className="container">
            <p>Hey {currentplayer}, it`s your turn </p>
            <div className={Style.grid}> 
          {Array(9).fill(null).map((_:string,i:number)=>(
              <Square 
              winner={winner}
              key={i}
               onClick={()=>  setSquarevalue(i)}
               value={squares[i]} 
              />
          ))}
          </div>
        </div>
    )
}
