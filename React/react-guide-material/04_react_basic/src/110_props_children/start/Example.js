import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container
        title="Childrenとは？"
        children={[<Profile {...profile[0]} />, <Profile {...profile[1]} />]}
      />
    </div>
  );
};

export default Example;
