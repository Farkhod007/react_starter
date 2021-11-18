const types = {
  primary: "balck",
  secondary: "yellow",
  papayawip: "red",
};

const Text = ({ children, type, ...props }) => {
  return (
    <p style={{
      "color": types[type]
    }} {...props}>
      {children}
    </p>
  );
};

export default Text;
