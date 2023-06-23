import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AddNumber from './components/AddNumber';

import './App.css'
function App() {

  const [data, setData] = useState(null)
  const [addNumber, setAddNumber] = useState(false)

  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:4000/number')
    console.log(data);
    setData(data.numbers)
  }

  useEffect(() => {
    fetchData()
  }, [addNumber])

  return (
    <div>
      <Navbar setAddNumber={setAddNumber} />
      <div className='max-w-[1440px] mx-auto'>
        <div className='flex flex-col md:flex-row gap-8 mx-2 md:mx-8 pt-8'>
          <div>
            <aside className=' w-44 px-3 py-5 shadow-md'>
              <h3 className='text-2xl border-dashed border-2 px-3 border-gray-400 font-medium tracking-wider'>Filters</h3>
            </aside>
          </div>
          <main className='flex-1'>

            <table className=' w-full '>
              <thead className='py-10 font-semibold bg-red-200'>
                <td className='px-5 py-3'>No</td>
                <td className='px-5 py-3'>Name</td>
                <td className='px-5 py-3'>Number</td>
              </thead>
              <tbody>
                {
                  data?.map((number, i) => (
                    <tr key={number._id}>
                      <td className='px-5 py-3'>{i + 1}</td>
                      <td className='px-5 py-3'>{number.firstName + ' ' + number.lastName}</td>
                      <td className='px-5 py-3'>{number.phone}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </main>
        </div>
      </div>
      {
        addNumber && <AddNumber setAddNumber={setAddNumber} />
      }

    </div>
  );
}

export default App;
