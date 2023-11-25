import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Prize } from '../interfaces/DataInterface';
import NobelController from '../data/NobelController';

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
    <div>
      <button onClick={() => console.log(year)}>hehe</button>
      <ul>
        {nobels.map((nobel:Prize, i:number) => <li key={i}>{nobel.awardYear + " - " + nobel.category.en + " | " + nobel.dateAwarded + " " + nobel.prizeAmount}</li>)}
      </ul>
    </div>
  )
}
