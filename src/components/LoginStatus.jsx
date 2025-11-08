function LoginStatus(props) {
  return (
    <>
      {props.isLoggedIn ? (<p>Welcome back {props.name}</p>) : (<p>Please login</p>)}
    </>
  );
}
export default LoginStatus;