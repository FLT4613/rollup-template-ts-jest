import { greet } from "src/greet";

const div = document.createElement("div")
div.innerText = greet("hoge")
document.body.appendChild(div);