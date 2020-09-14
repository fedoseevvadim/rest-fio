import React, {useEffect} from 'react';
import FioList from './Fio/FioList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'

const AddFio = React.lazy(() => import('./Fio/AddFio'))

function App() {
 
  const [fios, setFios] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  var cors = require('cors');

  useEffect(() => {
    fetch('http://localhost:8080/api/users/')
      .then(response => response.json())
      .then(fios => {
        setTimeout(() => {
          setFios(fios)
          setLoading(false)
        }, 2000)
      })
  }, [])


  function toggleFio(id) {
    setFios(
      fios.map(fio => {
        if (fio.id === id) {
          fio.completed = !fio.completed  
        }
      return fio
    })
    )
  }

  function removeFio(id) {
    setFios(fios.filter(fio => fio.id !== id ))
  }

  function addFio(first_name) {
    setFios(
      fios.concat([
        {
          first_name,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{removeFio}}>

      <div className='wrapper'>
        <h1>ФИО</h1>
        
        <Modal />

        <React.Suspense fallback={<p>Загрузка...</p>}>
          <AddFio onCreate={addFio} />
        </React.Suspense>

        {loading && <Loader />}

        {fios.length ? (
           <FioList fios={fios} onToggle={toggleFio} />
        ) : (
          loading ? null: <p>Нет данных!</p>
        )}

        </div>
    </Context.Provider >
  )
}
  
export default App
