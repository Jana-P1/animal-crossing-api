const Villager = ({ villager }) => {
  return ( 
    <>
      <div style={{backgroundColor: villager['bubble-color']}} className="villager">
        <img src={villager.image_uri} alt="villager" />
        <h3>{villager.name['name-EUfr']} the {villager.species} is {villager.personality}</h3>
        <h4 style={{color: villager['text-color']}}> "{villager['catch-phrase']}"</h4>
        
      </div>

    </>
   );
}
 
export default Villager;