
import './App.css';
import Livre from './Livre';

import { livres } from './livres';

function App() {
  return (
      <section className='listesLivres'>
     
      {livres.map((livre) => {
  
     
        const { img, titre, auteur,id } = livre;
        return <Livre  {...livre} key={id} />;
      })}
    </section>
   
  );
}

export default App;
