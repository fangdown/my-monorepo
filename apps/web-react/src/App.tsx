import { greet } from "@my-monorepo/shared-utils";
import "./App.css";

function App() {
  return (
    <>
      <h1>{greet("Monorepo fangdu")}</h1>
    </>
  );
}

export default App;
