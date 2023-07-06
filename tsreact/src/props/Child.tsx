interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode; // Add this line
}

export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
