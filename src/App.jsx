import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Items from './components/items/Items'
import CoockTable from './components/coockingTable/CoockTable'
function App() {
  

  return (
    <>
      {/* navbar start */}
      <Navbar></Navbar>
      {/* Banner start */}
      <Banner></Banner>
      {/* items and cocking table */}
      <section className='flex justify-start max-sm:flex-col-reverse'>
        <Items></Items>
        <CoockTable></CoockTable>
      </section>
    </>
  )
}

export default App
