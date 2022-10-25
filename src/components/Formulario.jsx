import { useEffect, useState } from "react"
import useSelectMoneda from "../hooks/useSelectMoneda"
import { moneda } from "../data/objectHelpers"
import Alert from "./Alert"

export default function Formulario({setValues}) {

  const [crypto, setCrypto] = useState([])

  const [currency ,SelectMoneda] = useSelectMoneda('Selecciona tu moneda preferida', moneda)
  const [cryptoValue , SelectCrypto] = useSelectMoneda('Selecciona tu cripto a cotizar', crypto)

  const [error, setError] = useState(false)


  useEffect(()=>{
    const fetchApi = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        const response = await fetch(url)
        const data = await response.json()

        const newArray = data.Data.map(coin => {
            return {
                id: coin.CoinInfo.Name,
                nombre: coin.CoinInfo.FullName,
            }
        })

        setCrypto(newArray)
    }

    fetchApi()
  }, [])

  const handleSubmit = e => {
        e.preventDefault()
        
        if(currency === '' || cryptoValue === '') {
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 2000)
            return
        }

        setError(false)
        setValues({
            currency,
            cryptoValue
        })
  }

  return (
    <form className="w-full p-10 md:p-0 lg:p-0 md:w-2/4 lg:w-2/4" onSubmit={handleSubmit}>
        <SelectMoneda />
        <SelectCrypto />
        {
            error ? <Alert message="Todos los campos son obligatorios" /> : null
        }
        <input className="bg-indigo-600 p-3 rounded-md font-semibold text-white hover:cursor-pointer hover:bg-indigo-700 w-full my-4" type="submit" value="Enviar" />
    </form>
  )
}
