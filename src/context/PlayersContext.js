import React, {useState} from 'react'

const Context = React.createContext({})

export function PlayersContextProvider ({children}){
    const [players, setPlayers] = useState([])

    return <Context.Provider value={{players, setPlayers}}>
        {children}
    </Context.Provider>
}

export default Context