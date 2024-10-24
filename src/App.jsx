import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Items from './components/items/Items'
import CoockTable from './components/coockingTable/CoockTable'
import { useState } from 'react'
function App() {
  
  const [coock, setcoock] = useState([]);
  const [separedCoock, setpreparedCoock] = useState([]);
  const[caloris, setcalories] = useState(0);
  const[time, settime] = useState(0);
  const setTimeandCalories = (times, calories) =>{
    setcalories(caloris + calories);
    settime(time + times);
  }
  const handleCoock = (item) =>{
    const isFixed = coock.find(
      (prevFind) => prevFind.recipe_id === item.recipe_id
    );
    if (!isFixed) {
      setcoock([...coock, item]);
    }
    else{
      alert("This Item's alrady taken");
    }
  }
  const deleteCock = (id) =>{
    const deleterec = coock.find((rec) => rec.recipe_id === id);
    const updatedata = coock.filter((rec) => rec.recipe_id !== id);
    setcoock(updatedata);
    setpreparedCoock([...separedCoock, deleterec]);
  }
  return (
    <>
      {/* navbar start */}
      <Navbar></Navbar>
      {/* Banner start */}
      <Banner></Banner>
      {/* items and cocking table */}
      <section className="flex max-sm:items-center justify-start max-sm:flex-col-reverse">
        <Items handleCoock={handleCoock}></Items>
        <CoockTable
          separedCoock={separedCoock}
          time={time}
          caloris={caloris}
          setTimeandCalories={setTimeandCalories}
          deleteCock={deleteCock}
          coock={coock}
        ></CoockTable>
      </section>
    </>
  );
}

export default App
