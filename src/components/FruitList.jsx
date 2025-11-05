// listing using for of loop:
function FruitList(){
    let Fruits=['Apple','Orange','Mango','Grapes']
    const list=[];
       for (let fruit of Fruits){
        list.push(<li>{fruit}</li>)
    }
    return(
        <div>
            <ul style={{listStyle:"none"}}>
                {list}
            </ul>
        </div>
    );
}
export default FruitList;