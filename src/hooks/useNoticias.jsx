import { useContext } from 'react'
import NoticiasContext from '../context/NoticiasProvider'

const useNoticias = () => {
    return useContext(NoticiasContext)
    console.log('hola')
}

export default useNoticias