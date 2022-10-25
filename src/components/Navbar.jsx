import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 mb-10 bg-gray-800">
        <p className="text-3xl text-white font-bold">Crypto <span className="text-indigo-600">compare</span></p>
        <ul className="text-white">
            <li><Link to='/' className="bg-indigo-600 p-2 rounded-md">Inicio</Link></li>
        </ul>
    </nav>
  )
}
