import ora from "ora";

const spinner = ora({
  text: "Chatbot is generating your answer please wait a bit...",
  color: "cyan",
  spinner: "dots",
});

export default spinner;
