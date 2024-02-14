import React from 'react'



const Livre = (props) => {

 const {
  img,
  titre,
  auteur,
  format,
  prix,
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
     <p>Livraison à {coutDELivraison} <b>{dateDeLivraison}</b>{conditionDELivraison} Ou livraison accélérée <b>{dateDeLivraisonAcce}</b></p>

 
   

  </article>
);
};

export default Livre