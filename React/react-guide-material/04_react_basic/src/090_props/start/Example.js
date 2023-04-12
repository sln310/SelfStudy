import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  const o = {
    color: "blue",
    num: 123,
  };
  return (
    <>
      <Child {...o} fn={hello} bool obj={{ name: "Tom", age: "20" }} />
      {/* <Child color="red" /> */}
    </>
  );
};
export default Example;
