import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Ken", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 35 },
  { name: "Eve", age: 40 },
  { name: "Charlie", age: 45 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((u) => u.name === name);

    setUser(foundUser);
  };

  return (
    <div>
      <h4>User Search</h4>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
