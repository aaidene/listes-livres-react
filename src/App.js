
import './App.css';
import Livre from './Livre';

import { livres } from './livres';

function App() {
  return (

    <>
   <h1>Les meilleures ventes d'amazon</h1>
      <section className='listesLivres'>
     
      {livres.map((livre,index) => {
  
        return <Livre  {...livre} key={livre.id} nb={index}  />;
      })}
    </section>
   </>
  );
}

export default App;
