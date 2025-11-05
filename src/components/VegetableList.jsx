// for listing array of objects using maps:

function VegetableList(){

     const listVegetables = [
    { name: "carrot", 
      color: "orange", 
      price: 30 },

    { name: "potato", 
      color: "brown", 
      price: 20 }
           ]

    return(
        <div >
          <ul style={{listStyle:"none"}}>
          {listVegetables.map((veg,index)=>(
            <li key={index}>{veg.name} - {veg.price}</li>
          ))}
          </ul>
          </div>
    );
}
export default VegetableList;