import React, {useEffect, useState} from 'react';

import './styles/main.css'
import PostList from "./components/PostList";
import Form from "./components/Form";
import PostFilter from "./components/PostFilter";
import MainModal from "./components/UI/modal/MainModal";
import MainButton from "./components/UI/button/MainButton";
import {usePosts} from "./components/hooks/usePosts";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/loader/Loader";
import StarRating from "./components/UI/stars/StarRating";
import colorData from "./components/API/color-data.json";
import ColorList from "./components/UI/colors/ColorList";
import FormColor from "./components/FormColor";

function App() {
    //placeholder
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    //создаем начальные состояния постов, передаем туда обьект
    const [posts, setPosts] = useState([]);

    //состояние filter
    const [filter, setFilter] = useState({sort: '', query: ''})

    // состояние для модального окна
    const [modal, setModal] = useState(false)

    const [colors, setColors] = useState(colorData);


    //плучаем данные с запроса

    useEffect(() => {
        fetchPosts();
    }, [])

    async function fetchPosts() {
        setTimeout(async () => {
            setIsPostsLoading(true);
            const posts = await PostService.getAllData();
            setPosts(posts);
            setIsPostsLoading(false);
        }, 1000)

    }


    //передаем соллбэк, функцию обратного взова, чтоб получить данные от ребенка  родителю и добаить пост

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    //передаем соллбэк, функцию обратного взова, чтоб получить данные от ребенка  родителю и удалить пост
    // получаем пост с родительського компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);




    return (
        <div className="App">
            <FormColor/>
            <StarRating style={{backgroundColor: '#ff57225e'}}/>
            <ColorList colors={colors} onRemoveColor={id => {
                const newColors = colors.filter(color => color.id !== id);
                setColors(newColors);
            }}/>
            <MainButton style={{marginBottom: '10px'}} onClick={() => setModal(true)}>Add post</MainButton>
            <MainModal visible={modal} setVisible={setModal}><Form create={createPost}/></MainModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {
                isPostsLoading
                    ? <Loader/>
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'JS'}/>
            }

        </div>
    );
}


export default App;
