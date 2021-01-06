import Home from "@/components/Home";
import MovieList from "@/components/MovieList";

const routers = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/movieList/:movieName',
        name: 'movieList',
        component: MovieList
    }

]

export default routers