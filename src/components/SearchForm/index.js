import React, {useState} from "react";

const SearchFormHome = (props) => {

    const { manejarSubmitFromHome } = props

    const [searchInput, setSearchInput] = useState('')


    const manejarSubmit = event => {
        //evito que no se refresque la pantalla
        event.preventDefault()

        //navegar a otra ruta
        manejarSubmitFromHome(searchInput)
    }


    const manejarChange  = event => {
        setSearchInput(event.target.value)
    }


  return (
      <form onSubmit={manejarSubmit}>
        <input
          placeholder="Ingresá un texto..."
          type="text"
          onChange={manejarChange}
          value={searchInput}
        />
        <button>Buscar</button>
      </form>
  )
};

//basicamente con el react.memo lo que hacemos es que solo se renderice este compoenente
// en el caso de que sus props se modifiquen
export default React.memo(SearchFormHome);
