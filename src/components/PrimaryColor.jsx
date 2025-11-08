function PrimaryColor({ colors }) {
  return (
   <>
   Primary Colors are : {""}
   {colors.map((color,index)=>(
    <span key={index}>{color} {index < colors.length-1 ? "," : "" }</span>
   ))}
   </>
  );
}
export default PrimaryColor;