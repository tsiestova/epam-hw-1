import {APIKEY} from "./config";
import {Movie, Music, Pic} from "./postES6";

let baseURL = "https://api.themoviedb.org/3";
const COUNT_OF_STARS = 5;
const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

let movieList;

export const loadBlogPages = function (page) {

    return fetch(`${baseURL}/movie/popular?api_key=${APIKEY}&page=${page}`)
        .then((result) => result.json())
        .then((data) => {
            return data.results.map((el) => {
                let data = new Date(el.release_date);
                let dataStr = `${data.getDate()} ` + `${month[data.getMonth() + 1]}, ` + `${data.getFullYear()}`;
                let stars = (COUNT_OF_STARS * (el.vote_average * 10)) / 100;

                return {
                    id: el.id,
                    stars: {
                        n: COUNT_OF_STARS,
                        full: Math.floor(stars)
                    },
                    type: "video",
                    // pic: "assets/pic/blog-img1.png",
                    pic: `https://image.tmdb.org/t/p/original/${el.backdrop_path}`,
                    // pic: `${baseURL}/movie/popular?api_key=${APIKEY}${el.backdrop_path}`,
                    src: `https://image.tmdb.org/t/p/original/${el.poster_path}`,
                    author: "Neil Richards",
                    title: el.original_title, //*****************    original_title, title, name, original_name,
                    text: el.overview,
                    button: {
                        title: "Read more",
                        href: "#",
                        type: "btn",
                    },
                    data: {
                        time: dataStr,
                        minuts: "10",
                        comments: el.vote_count,
                    },
                };
            });
        }).then((response) => {
            return Promise.all(
                response.map((item) =>
                    fetch(`${baseURL}/movie/${item.id}?api_key=${APIKEY}&language=en-US`)
                        .then((data) => data.json())
                        .then((data) => {
                            item.runtime = data.runtime;
                            let result = '';
                            switch (item.type) {
                                case 'video':
                                    result = new Movie(item);
                                    break;
                                case 'music':
                                    result =  new Music(item);
                                    break;
                                case 'pic':
                                    result =  new Pic(item);
                                    break;

                                default:
                                    result = '';
                            }

                            return result;
                        })
                )
            )
        });
}

export const loadSearchPagesByTitle = function (page, value) {
    return fetch(
        `${baseURL}/search/multi?api_key=${APIKEY}&language=en-US&page=${page}&include_adult=false&query=${value}`
    )
        .then((result) => result.json())
        .then((data) => {
            return data.results
                .filter((el) => el.media_type === 'movie')
                .filter((el) => el.backdrop_path && el.poster_path)
                .map((el) => {
                    let data = new Date(el.release_date);
                    let dataStr = `${data.getDate()} ` + `${month[data.getMonth() + 1]}, ` + `${data.getFullYear()}`;
                    let stars = (COUNT_OF_STARS * (el.vote_average * 10)) / 100;
                    return {
                        id: el.id,
                        stars: {
                            n: COUNT_OF_STARS,
                            full: Math.floor(stars)
                        },
                        type: el.media_type,
                        pic: `https://image.tmdb.org/t/p/original/${el.backdrop_path}`,
                        src: `https://image.tmdb.org/t/p/original/${el.poster_path}`,
                        author: "",
                        title: 'el.name',
                        text: el.overview,
                        button: {
                            title: "Read more",
                            href: "#",
                            type: "btn",
                        },
                        data: {
                            time: dataStr,
                            minuts: '',
                            comments: el.vote_count,
                        }
                    };
                });
        })
        .then((response) => {
            return Promise.all(
                response.map((item) =>
                    fetch(`${baseURL}/movie/${item.id}?api_key=${APIKEY}&language=en-US`)
                        .then((data) => data.json())
                        .then((data) => {

                            item.title = data.original_title;
                            item.runtime = data.runtime;
                            // console.log(item);
                            return new Movie(item);

                        })
                )
            );
        });
};


export const lazyLoading = (func, page, blog, input) => {
        func(page, input).then((data) => {
        const div = document.createElement('div');
        div.innerHTML = blog.createList(data);
        const list = document.querySelector('.section__blog-list');
        list.appendChild(div);
    })

}

