import React from 'react';

const CoockTable = ({
  coock,
  deleteCock,
  caloris,
  time,
  separedCoock,
  setTimeandCalories,
}) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 bg-base-100 m-8">
      <h1 className="text-[24px] text-center font-[600]">
        Want to cook: {coock.length}
      </h1>

      <div className="min-h-[450px]">
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
                <tr key={indx} className="hover">
                  <th>{indx + 1}</th>
                  <td>{cock.recipe_name}</td>
                  <td>{cock.preparing_time} Times</td>
                  <td>{cock.calories} Calories</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteCock(cock.recipe_id);
                        setTimeandCalories(cock.preparing_time, cock.calories);
                      }}
                      className="btn btn-accent"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* prepared coocked section */}
      <div className="my-2">
        <h1 className="text-[24px] text-center font-[600]">
          Want to cook: {separedCoock.length}
        </h1>
        <div className="min-h-[60px]">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Times</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {separedCoock.map((cock, indx) => (
                  <tr key={indx} className="hover">
                    <th>{indx + 1}</th>
                    <td>{cock.recipe_name}</td>
                    <td>{cock.preparing_time} Times</td>
                    <td>{cock.calories} Calories</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-[16px] flex items-center justify-evenly font-[500] text-gray-400">
          <h3 className='text-center'>Total Time: {time} Minutes </h3>
          <h3 className='text-center'>Total Calories: {caloris} Calories</h3>
        </div>
      </div>
    </div>
  );
};

export default CoockTable;