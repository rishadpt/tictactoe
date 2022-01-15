import Style from  "../styles/Home.module.css"
type player = "X" | "O" | null; //


function Square ({ value, winner, onClick }: { value: player, winner: player, onClick: () => void }) {
    if (!value) {
        return <button className={Style.square} onClick={(onClick)} disabled={Boolean(winner)} />
    }
    return <button className={`${Style.square} square_${value.toLocaleLowerCase()}`} disabled>{value}</button>
}

export default Square