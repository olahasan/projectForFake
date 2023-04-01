import React, { Fragment, useEffect , useState} from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useDispatch, useSelector } from 'react-redux';
import { getbooks } from '../../store/bookSlice';
import { deletebook } from './../../store/bookSlice';
import './book.css';

const PostContainer = () => {
  const [SelectedBook, setSelectedBook] = useState(null);

  // const globalState = useSelector(state => state.books);
  const {isLoading , books } = useSelector(state => state.books);
  // console.log(globalState);

  const {isLoggedIn} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getbooks());
  },[dispatch]);

  const getBookId = (id) => {
    const selectedBook = books.find(item => item.id === id);
    setSelectedBook( (prev)=>{return {...prev, ...selectedBook};} );
    console.log(selectedBook);
    console.log(id);
  };

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={isLoading} books={books} isLoggedIn={isLoggedIn} deletebook={deletebook} dispatch={dispatch} getBookId={getBookId}/>
        </div>
        <div className='col side-line'>
          <BookInfo info = {SelectedBook}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
