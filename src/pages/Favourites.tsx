import {useSelector} from "react-redux";
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/useActions";

const Favourites = () => {
    const {favourites} = useAppSelector(state => state.github)
    const {removeFavourite} = useActions()

    if (favourites.length === 0) return <p className='text-center text-red-500 my-5'>No items.</p>

    const removeFromFavourites = (event: React.MouseEvent<HTMLButtonElement>, item: string) => {
        event.preventDefault()
        removeFavourite(item)
    }

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            <ul className='list-none'>
                { favourites.map(item => {
                    return <li className='border-gray-400 border-[1px] rounded p-2 mb-2' key={item}>
                        <a className='flex flex-col' href={item} target="_blank">
                            <div>{item}</div>
                            <button onClick={(event) => removeFromFavourites(event, item)} className='bg-red-500 text-white rounded my-1'>Remove</button>
                        </a>
                    </li>
                }) }
            </ul>
        </div>
    )
}
export default Favourites;