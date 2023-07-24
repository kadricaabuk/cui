import { Alert, Button } from "./components";

function App() {
  return (
    <div className="App">
      <h2>BUTTONS</h2>
      <Button.Primary>
        TEST
      </Button.Primary>
      
      <Button.Secondary>
        TEST
      </Button.Secondary>

      <Button.Outline>
        TEST
      </Button.Outline>

      <h2>ALERTS</h2>
      <Alert.Error>
        Error Alert
      </Alert.Error>
      
      <Alert.Success>
        Success Alert
      </Alert.Success>
      
      <Alert.Warning>
        Warning Alert
      </Alert.Warning>
      
      <Alert.Info>
        Info Alert
      </Alert.Info>
    </div>
  );
}

export default App;
