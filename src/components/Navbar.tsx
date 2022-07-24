import { Link } from 'react-router-dom'
import {useAppSelector} from "../hooks/redux";

const Navbar = () => {

    const {favourites} = useAppSelector(state => state.github)

    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white ">
            <div className='font-bold'>
                Github Api
            </div>
            <div>
                <Link className='mr-5' to='/'>Home</Link>
                <Link className='relative' to='/favourites'>
                    Favourites
                    { favourites.length > 0 && <div
                        className='absolute top-[-10px] p-0.5 right-[-15px] bg-red-500 rounded-full text-white text-[10px]'>
                        {favourites.length}
                    </div>}
                </Link>
            </div>
        </nav>
    )
}
export default Navbar;