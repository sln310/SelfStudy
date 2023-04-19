import Profile from "./components/Profile";

const profile = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  return (
    <>
      <ul>
        {profile.map((profile) => (
          <li key={profile.name}>
            <Profile {...profile} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
