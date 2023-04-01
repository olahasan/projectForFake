import React from 'react';
import { useSelector } from 'react-redux';
import { deletebook } from './../../store/bookSlice';

const BooksList = ({isLoading , books , isLoggedIn , deletebook , dispatch , getBookId}) => {
  const { error } = useSelector (state => state.books);
 
 const bookList = 
//  books &&
    error? <p className='text-danger'> "ERROR!!  THERE ARE NO BOOKS AVAILABLE" </p> : 
    books.map((e) => 
      <li className='list-group-item d-flex  justify-content-between align-items-center' key={e.id}>
        <div>{e.title}</div>
        <div className='btn-group' role='group'>
          <button type='button' className='btn btn-primary' onClick={()=>getBookId(e.id)}>
            Read
          </button>
          <button type='button' className='btn btn-danger' disabled={!isLoggedIn} onClick={()=>dispatch(deletebook(e))
              .unwrap()
              .then((originalPromiseResult) => {
                 console.log(originalPromiseResult);
              })
              .catch((rejectedValueOrSerializedError) => {
                 console.log(rejectedValueOrSerializedError);
              })}>
            Delete
          </button>
        </div>
      </li>
    );

  return (
    <div>
      
      <h2>Books List</h2>
      {isLoading ? "LOADING..." : 
        <ul className='list-group'>
          {bookList}
        </ul> 
      }
      
    </div>
  );
};

export default BooksList;





  // {/* <li className='list-group-item d-flex  justify-content-between align-items-center'>
  // <div>Cras justo odio</div>
  // <div className='btn-group' role='group'>
  //   <button type='button' className='btn btn-primary'>
  //     Read
  //   </button>
  //   <button type='button' className='btn btn-danger'>
  //     Delete
  //   </button>
  // </div>
  // </li>  */}
