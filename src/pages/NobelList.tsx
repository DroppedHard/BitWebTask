import { ChangeEvent, useEffect, useState } from 'react';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom'
import { Prize } from '../interfaces/DataInterface';
import NobelController from '../data/NobelController';
import NobelListNode from '../components/NobelListNode';

export default function NobelList() {
  const navigate: NavigateFunction = useNavigate();
  const { year } = useParams();
  const [nobels, setNobels] = useState<Prize[]>([])
  const [filteredNobels, setFilteredNobels] = useState<Prize[]>([])
  const [categoryFilter, setCategoryFilter] = useState<string>("")

  useEffect(() => {
    const getData = async () => {
      await NobelController.fetchData()
      if (year) {
        setNobels(NobelController.getNobelsInYear(year))
        console.log("XDD", filteredNobels, nobels)
        setFilteredNobels(nobels)
      } else {
        alert("ERROR - Year is undefined")
        return navigate('/')
      }
    }
    getData().then(() => {
      console.log("Fetched", filteredNobels, nobels)
    })
  }, [nobels.length])
   
  useEffect(() => {
    setFilteredNobels(nobels.filter((nobel:Prize) => {
      console.log(nobel.categoryFullName[NobelController.lang].includes(categoryFilter), nobel.categoryFullName[NobelController.lang], categoryFilter)
      return nobel.categoryFullName[NobelController.lang].includes(categoryFilter)
    }))
    console.log(nobels, filteredNobels)
  }, [categoryFilter])

  return (
    <div className='flex justify-center items-center flex-col h-full gap-4'>
      <h1 className='my-2 text-xl text-center font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x'>
        List of Nobel awards for year
        <mark className=" ml-1 p-1 text-white bg-accent-600 rounded">{year}</mark>
        :
        </h1>

      <div>
        <input className='md:w-72 border border-primary-300 text-gray-900 text-sm rounded-xl focus:ring-alert-500 focus:border-alert-500 block p-1 '
          type="text" name="categoryFilter" id="categoryFilter" placeholder=' Category name' onChange={(e:ChangeEvent<HTMLInputElement>) => {setCategoryFilter(e.target.value)}}/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full overflow-y-auto h-96 md:h-[60vh]'>
        {((filteredNobels.length==0 && categoryFilter=="")? nobels : filteredNobels).map((nobel:Prize, i:number) => <div className='flex justify-center' key={i}><NobelListNode info={nobel}/></div>)}
      </div>
    </div>
  )
}
