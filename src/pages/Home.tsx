import { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react'
import NobelController from '../data/NobelController'
import StylizedButton from '../components/StylizedButton';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate: NavigateFunction = useNavigate();
  const [years, setYears] = useState<number[]>([]);
  const [selected, setSelected] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      await NobelController.fetchData()
      setYears(NobelController.getYearRange())
      // console.log(years)
      setSelected(years[0])
    }
    fetchData();
  }, [years.length])

  const listNobels: MouseEventHandler<HTMLButtonElement> = () => {
    return navigate('/nagrody/' + selected)
  }

  return (
    <>
      <div className='flex items-center justify-center flex-col h-full gap-5'>
        <h1 className='text-3xl font-bold'>Welcome to Nobel Awards page!</h1>
        <h3 className='font-semibold'>Please select the year</h3>
        <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelected(parseInt(e.target.value))} name="yearSelect" className=''>
          {years.map((val: number, i: number) => <option key={i} value={val}>{val}</option>)}
        </select>
        <StylizedButton clickHandler={listNobels} content='List Nobels' bgColor={"primary-600"} bgColorHover={"primary-500"} bgColorActive='primary-800' textColor={"white"} />
      </div>
    </>
  )
}
