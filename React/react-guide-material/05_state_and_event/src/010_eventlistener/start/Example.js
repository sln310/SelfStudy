const Example = () => {
  const clickHandler = () => {
    alert("Button was clicked");
  };
  const clickHandler2 = () => {
    console.log("Button was clicked");
  };
  return (
    <>
      <button onClick={clickHandler}>Click</button>
      <button onClick={clickHandler2}>Click</button>
    </>
  );
};

export default Example;
