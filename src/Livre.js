import React from 'react';
import Rating from './rating'; // Import correct de la composante Rating


const Livre = (props) => {

 const {
  img,
  titre,
  auteur,
  format,
  nb,
  prix,
   notation,
    avis,
  livraison: {
    standard: { date: dateDeLivraison, coût: coutDELivraison },
    accélérée: { date: dateDeLivraisonAcce, condition: conditionDELivraison }
  }
} = props;

return (
  <article className='livre'>
    <img src={img} alt={titre} />
    <p>{titre}</p>
    <h4>{auteur}</h4>
     <h4>{format}</h4>
     <h2>{prix}</h2>

       <Rating
  value={notation}  
 text={`${avis} avis`}
/>
  
     <p>Livraison à {coutDELivraison} <b>{dateDeLivraison}</b>{conditionDELivraison} Ou livraison accélérée <b>{dateDeLivraisonAcce}</b></p>

 
   <span className='nb'>{`# ${nb + 1}`}</span>

  </article>
);
};

export default Livre