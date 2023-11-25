import { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react'
import NobelController from '../data/NobelController'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { TranslationSelect } from '../interfaces/DataInterface';

export default function Home() {
  const navigate: NavigateFunction = useNavigate();
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(-1)
  const [selectedLang, setSelectedLang] = useState<TranslationSelect>('en')

  useEffect(() => {
    const fetchData = async () => {
      await NobelController.fetchData()
      setYears(NobelController.getYearRange())
      // console.log(years)
    }
    fetchData();
  }, [years.length])


  const listNobels: MouseEventHandler<HTMLButtonElement> = () => {
    NobelController.lang = selectedLang;
    return navigate('/nagrody/'+ selectedLang +'/' + selectedYear)
  }

  return (
    <>
      <div className='flex items-center justify-center flex-col h-full gap-5'>
        <h1 className='text-3xl font-bold text-center px-2'>Welcome to Nobel Awards page!</h1>
        <label htmlFor='yearSelect' className='font-semibold'>Please select the year</label>
        <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedYear(parseInt(e.target.value))} id="yearSelect" 
          className='md:w-72 border border-primary-300 text-gray-900 text-sm rounded-xl focus:ring-alert-500 focus:border-alert-500 block p-2.5 '
          >
            <option value={-1}>Select the year</option>
          {years.map((val: number, i: number) => <option key={i} value={val}>{val}</option>)}
        </select>
        <label htmlFor='lang' className='font-semibold'>Select list language</label>
        <select name="lang" id="lang" onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedLang(e.target.value as TranslationSelect)} 
          className='md:w-72 border border-primary-300 text-gray-900 text-sm rounded-xl focus:ring-alert-500 focus:border-alert-500 block p-2.5 '
        >
          <option value="en">English</option>
          <option value="no">Norwegian</option>
          <option value="se">Sweedish</option>
        </select>
        <button onClick={listNobels} className={`text-white bg-primary-600 p-3 px-5 rounded-full hover:bg-primary-500 ${selectedYear>0?"hover:scale-105":""} active:bg-primary-800 active:scale-95 disabled:bg-gray-300`} disabled={selectedYear<=0}>List nobels</button>
      </div>
    </>
  )
}
