import React from 'react'

export default function TablaResultado({cotizacion}) {

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} = cotizacion

  return (
    <div className='bg-gray-800 p-8 rounded-lg text-center'>
        <img src={`https://www.cryptocompare.com${IMAGEURL}`} alt="Crypto Image" width={150} className="m-0 mx-auto" />
        <p className='text-2xl my-2 text-white font-semibold'>Precio actual: <span className='text-indigo-600'>{PRICE}</span></p>
        <p className='text-xl my-3 text-white font-semibold'>Precio más alto del día: <span className='text-indigo-600'>{HIGHDAY}</span></p>
        <p className='text-xl my-3 text-white font-semibold'>Precio más bajo del día: <span className='text-indigo-600'> {LOWDAY}</span></p>
        <p className='text-xl my-3 text-white font-semibold'>Variación últimas 24 horas: <span className='text-indigo-600'>{CHANGEPCT24HOUR}%</span></p>
        <p className='text-xl my-3 text-white font-semibold'>Última actualización: <span className='text-indigo-600'>{LASTUPDATE}</span></p>
    </div>
  )
}
