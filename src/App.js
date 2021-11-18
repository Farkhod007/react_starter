import Typography from "./components/Typography";
import Text from "./components/Text";
import Tooltip from "./components/Tooltip";

const App = () => {
  return (
    <div>
      <Typography variant="h1">This is heading</Typography>
      <Typography variant="h2" color="secondary">
        This is heading
      </Typography>
      <Typography variant="bodyOne" color="papayawip">
        This is heading
      </Typography>
      <Text type="secondary">Salom</Text>

      <Tooltip color="secondary" brcolor="red" bgcolor="blue" content="Tooltip" direction="bottom"><button>Salom</button></Tooltip>

    </div>
  );
};

export default App;
