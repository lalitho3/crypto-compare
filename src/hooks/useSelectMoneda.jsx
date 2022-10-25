import { useState } from "react"

export default function useSelectMoneda(label, opciones) {
  
    const [state, setState] = useState('')

    const SelectMoneda = () => (
        <>
            <label htmlFor="select" className="text-white block my-3">{label}:</label>
            <select name="select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium" value={state} onChange={e => setState(e.target.value)}>
                <option value="">-- Seleccione --</option>
                {
                    opciones.map(opcion => (
                        <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                    ))
                }
            </select>
        </>
    )

    return [
        state,
        SelectMoneda   
    ]

}
