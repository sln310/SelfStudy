import SaySomethig from "./saySomething";
// import saySomethig from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

const saySomethig = new SaySomethig("Hello Typescript");
saySomethig.sayText(root);
