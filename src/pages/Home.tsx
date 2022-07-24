import {useLazyGetUsersReposQuery, useSearchUsersQuery} from "../store/github/github.api";
import {ChangeEvent, useEffect, useState} from "react";
import {useDeobounce} from "../hooks/useDebounce";
import RepoCard from "../components/RepoCard";

const Home = () => {
    const [search, setSearch] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const debounce = useDeobounce(search, 1000)
    const {isLoading, isError, data} = useSearchUsersQuery(debounce, {
        skip: debounce.length < 1,
        refetchOnFocus: true
    })
    const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUsersReposQuery()

    useEffect(() => {
        setDropdown(!!(debounce.length > 1 && data?.length))
    }, [debounce, data])

    const clickHandler = (username: string) => {
        fetchRepos(username)
        setDropdown(false)
    }

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            { isError && <p className="text-center text-red-600">Something went wrong...</p>}
            <div className="relative w-[560px]">
                <input
                className="border py-2 px-4 w-full h-[42px] mb-2"
                type="text" 
                placeholder="search github username..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                {dropdown && <ul className="list-none overflow-y-auto absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
                    { isLoading && <p className="text-center">Loading...</p>}
                    {
                        data?.map(user => {
                            return <li
                                onClick={() => clickHandler(user.login)}
                                className='px-2 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer'
                                key={user.id}>{ user.login }</li>
                        })
                    }
                </ul>}
                <div className="container">
                    { areReposLoading && <p className='text-center'>Loading...</p>}
                    {
                        repos?.map(repo => (
                            <RepoCard key={repo.id} repo={repo} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Home;