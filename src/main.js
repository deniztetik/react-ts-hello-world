import { h, render } from "https://cdn.pika.dev/preact@^10.4.4";
import Hello from "./Hello.js";
const App = () => h(Hello, null);
render(h(App, null), document.getElementById("root"));
