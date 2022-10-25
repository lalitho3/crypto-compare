import { useState, useEffect } from "react"

import Navbar from "../components/Navbar"
import Formulario from "../components/Formulario"
import TablaResultado from "../components/TablaResultado"

export default function Home() {

  const [values, setValues] = useState({})
  const [cotizacion, setCotizacion] = useState({})

  useEffect(()=>{
    if(Object.keys(values).length > 0) {

      const {currency, cryptoValue} = values

      const fetchApi = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoValue}&tsyms=${currency}`
        const response = await fetch(url)
        const data = await response.json()
        setCotizacion(data['DISPLAY'][cryptoValue][currency])
      }

      fetchApi()
    }
    
  }, [values])

  return (
    <div>
        <Navbar />
        <section className="flex flex-col justify-around items-center md:flex-row">
            <Formulario setValues={setValues} />
            {
              Object.keys(cotizacion).length > 0 ? <TablaResultado cotizacion={cotizacion} /> : null
            }
        </section>
    </div>
  )
}
