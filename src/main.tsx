import { h, render } from "https://cdn.pika.dev/preact@^10.4.4";

import Hello from "./Hello.js";

const App = () => <Hello />;

render(<App />, document.getElementById("root"));
