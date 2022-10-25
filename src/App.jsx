import { Link } from 'react-router-dom'
import Logo from '/images/crypto.png'

export default function App() {
  return (
    <section className='flex flex-col my-6 items-center'>
      <img src={Logo} alt="Crypto Logo" className='m-0 p-0 animate-spin-slow' width={400} />
      <div className='max-w-xl flex flex-col items-center text-center'>
        <h1 className='text-6xl font-bold text-white my-5'>Crypto <span className='text-indigo-600'>compare</span></h1>
        <p className='text-lg text-white my-4'>Compara y cotiza los precios de las cryptos con mayor rendimiento</p>
        <Link to='/home' className='bg-indigo-600 text-white text-lg font-medium py-2 px-4 rounded-md hover:bg-indigo-700'>Comenzar</Link>
      </div>
    </section>
  )
}
