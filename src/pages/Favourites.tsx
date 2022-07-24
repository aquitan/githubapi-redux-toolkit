import {useSelector} from "react-redux";
import {useAppSelector} from "../hooks/redux";

const Favourites = () => {
    const {favourites} = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p className='text-center text-red-500 my-5'>No items.</p>

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            <ul className='list-none'>
                { favourites.map(item => {
                    return <li key={item}>
                        <a href={item} target="_blank">{item}</a>
                    </li>
                }) }
            </ul>
        </div>
    )
}
export default Favourites;