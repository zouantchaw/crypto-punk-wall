import React from 'react';

const List = ({punks}) => {
  return (
    <>
      {punks.map((punk) => {
        const {id, name, wallet, image} = punk;
        return <article key={id} className='punk'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>Owner: {wallet}</p>
          </div>

        </article>
      })}
    </>
  );
};

export default List;
