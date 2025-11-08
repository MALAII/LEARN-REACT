import PrimaryColor from "./PrimaryColor";
function ColorParent() {
  const colors = ["Red", "Blue", "Yellow"];
  return (
    <>
      <PrimaryColor colors={colors} />
    </>
  );
}

export default ColorParent;