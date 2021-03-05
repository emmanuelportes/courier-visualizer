import React, {useState, useEffect} from 'react'
import Packages from './components/packages/packages'
import './App.css'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const itemsFetched = async() => {
      const packages = await fetch(
        'https://courierdemo.azurewebsites.net/api/packages/getPending?username={username}'
        )
      
      const data = await packages.json();


      console.log(data.responseObject)

      setItems(data.responseObject)
   }

   itemsFetched()

  }, [])


  return (
    <div className="container">
      <Packages items={items} />

    </div>
  );
}

export default App;
