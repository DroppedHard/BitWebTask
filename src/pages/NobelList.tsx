import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Prize } from '../interfaces/DataInterface';
import NobelController from '../data/NobelController';
import NobelListNode from '../components/NobelListNode';

export default function NobelList() {
  const { year } = useParams();
  const [nobels, setNobels] = useState<Prize[]>([])

  useEffect(() => {
    const getData = async () => {
      await NobelController.fetchData()
      if (year) {
        setNobels(NobelController.getNobelsInYear(year))
      } else {
        console.log("ERROR - Year is undefined")
      }
    }
    getData()
  }, [nobels.length])
  

  return (
    <div className='flex justify-center items-center flex-col h-full'>
      <h1 className='my-4 text-xl text-center font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x'>
        List of Nobel awards for year
        <mark className=" ml-1 p-1 text-white bg-accent-600 rounded">{year}</mark>
        :
        </h1>
      <ul className='flex flex-col gap-3 w-full overflow-y-auto h-full'>
        {nobels.map((nobel:Prize, i:number) => <li className='flex justify-center' key={i}><NobelListNode info={nobel}/></li>)}
      </ul>
    </div>
  )
}
