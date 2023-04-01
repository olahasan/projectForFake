import React, { Fragment } from 'react';

const BookInfo = ({info}) => {
  console.log(info);
  return (
    <Fragment>
      <h2>Book Details</h2>
      {
      info ? 
      <div>
        <p className='fw-bold'>Title:{info.title}</p>
        <p className='fw-bold'>Inserted By:{info.userName}</p>
        <p className='fw-light'>Description:{info.Description}</p>
        <p className='fst-italic'>Price:{info.price}</p>
      </div>
      : 
      <div className='alert alert-secondary' role='alert'>
        There is no book selected yet. Please select One!
      </div>
      }

      {/* <div className='alert alert-secondary' role='alert'>
        There is no book selected yet. Please select!
      </div> */}
      {/* <div>
        <p className='fw-bold'>Title:{info.title}</p>
        <p className='fw-bold'>Inserted By:{info.userName}</p>
        <p className='fw-light'>Description:{info.Description}</p>
        <p className='fst-italic'>Price:{info.price}</p>
      </div> */}
    </Fragment>
  );
};

export default BookInfo;
