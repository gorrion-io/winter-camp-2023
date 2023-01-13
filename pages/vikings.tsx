import vikingsJson from '../vikings.json'
import vikingsYaml from '../vikings.yaml'
import { use, useEffect, useState } from 'react'
import { Viking } from '../types/Viking'
import { handleVikingsList } from '../lib/vikings'
import { VikingCard } from '../components/VikingCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function List() {
  const [currentId, setCurrentId] = useState<number>(0)
  const [showList, setShowList] = useState<boolean>(false)
  const data: Viking[] = handleVikingsList(vikingsJson, vikingsYaml)

  const handleClick = (direction:string) => {
    if (direction === 'prev') {
      if (currentId < 1) {
        setCurrentId(data.length-1)
      } else setCurrentId(currentId-1)
    } else if (direction === 'next') {
      if (currentId > data.length-2) {
        setCurrentId(0)
      } else setCurrentId(currentId+1)
    }
  }

  const handleShowList = () => {
    setShowList(!showList)
  }

    return (
        <div className='page'>
          <div className='page__top-wrap'>
            <button className='btn' onClick={() => handleClick('prev')}>Prev</button>
            <ul className='vikings-list'>
              {data?.sort((x, y) => x.age - y.age).map((viking:Viking, id:number) => {
                return id === currentId && <VikingCard key={id} viking={viking}/>  
              })}
            </ul>
            <button className='btn' onClick={() => handleClick('next')}>Next</button>
          </div>
          <div className='page__bottom-wrap'>
            <button className='btn' onClick={handleShowList}>Click to show whole list</button>
                  <button 
                    style={{
                      position: 'fixed', 
                      left:'50%', 
                      top: showList ? '5px' : '100%', 
                      transform: 'translateX(-50%)', 
                      zIndex: '10',
                      background: 'none',
                      border: 'none',
                      transition: 'top .5s ease',
                      cursor: 'pointer',
                    }}
                    onClick={handleShowList}
                  >
                    <FontAwesomeIcon icon={faArrowDown} style={{fontSize: '30px'}}/>
                  </button>
                  <ul className='vikings-list' style={{top: showList ? '0' : '100%', transition: '.5s ease'}}>
                    {data?.sort((x, y) => x.age - y.age).map((viking:Viking, id:number) => 
                      <VikingCard key={id} viking={viking}/>
                    )}
                  </ul>
          </div>
        </div>
      )
}

// export async function getServerSideProps() {
//   const result = await fetch(`http://localhost:3000/api/vikings`)
//   const data = await result.json()
//   return {
//     props: { data }
//   }
// }