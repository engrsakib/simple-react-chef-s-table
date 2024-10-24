import React from 'react';

const CoockTable = ({ coock }) => {
    
  return (
    <div className="w-1/3 border-2 rounded-2xl text-gray-600 bg-base-100 m-8">
      <h1 className="text-[24px] text-center font-[600]">
        Want to cook: {coock.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Times</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {coock.map((cock, indx) => (
              <tr key={indx}>
                <th>{indx + 1}</th>
                <td>{cock.recipe_name}</td>
                <td>{cock.preparing_time} Times</td>
                <td>{cock.calories} Calories</td>
                <td>
                  <button className="btn btn-accent">Preparing</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoockTable;