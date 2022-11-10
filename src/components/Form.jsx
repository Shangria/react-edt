import React, {useState} from 'react';
import MainButton from "./UI/button/MainButton";
import MainInput from "./UI/input/MainInput";


/*принимаем фукции и обьекты от родителя через props*/

const Form = ({create}) => {

    /*одно состояние на все inputs в виде обьекта*/
    const [postMany, setPostMany] = useState({title:'',  body:''});

/*
/!*состояния value для каждого input*!/
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
*/



//получаем DOM element c помощоб хука  useRef
   /* const bodyInputRef = useRef();*/


    const addNewPost = (e) => {
        e.preventDefault();
        //создаем новй пост
        const newPost = {
            ...postMany,
            id: Date.now(),

        }

        //деструктуризация create

        create(newPost)

        //добавляем нов обьект в массив(новый пост)
     /*   setPosts([...posts, newPost])*/




        //очистить inputs
      /*  setTitle('')
        setBody('')*/

        //очистить все inputs
        setPostMany({title:'', body:''})




    }

    return (
        <>
            <form>

                {/* для общего обьеекта куда записываем value  c каждого input start*/}
                <MainInput
                    /*следим за изменением value в input*/
                    onChange={e => setPostMany({...postMany, title: e.target.value})}

                    /*    получаем текущее value с input*/
                    value={postMany.title}

                    type='text'
                    placeholder='Name'/>

                <MainInput
                    /*следим за изменением value в input*/
                    onChange={e => setPostMany({...postMany, body: e.target.value})}

                    /*    получаем текущее value с input*/
                    value={postMany.body}

                    type='text'
                    placeholder='Name'/>



                  {/* для общего обьеекта куда записываем value  c каждого input end*/}

                <MainButton onClick={addNewPost}>Add post</MainButton>


             {/*   <MainInput*/}
                   {/* следим за изменением value в input*/}
                   {/* onChange={e => setTitle(e.target.value)}*/}

                   {/*получаем текущее value с input*/}
                  {/*  value={title}*/}
{/*
                    type='text'
                    placeholder='Name'/>
                <MainInput
                    onChange={e => setBody(e.target.value)}
                    value={body}*/}

                 {/* передаем свойста элемента input компоненту*/}
                {/*    ref={bodyInputRef}*/}

              {/*      type='text'
                    placeholder='Description'/>*/}

                {/*создаем слушатель сообытия на клик, передаем туда функцию без ()*/}



            </form>
        </>
    );
};

export default Form;
