const welcomeMessage = [ "Welcome to my terminal!",
"",];

const help = [
    "Controls:-",
    `${String.fromCodePoint(0x1f7e2)} to maximise`,
    `${String.fromCodePoint(0x1f7e1)} to minimise or restore`,
    `${String.fromCodePoint(
      0x1f534
    )} to close this page and open my LinkedIn Page`,
    `Hint: Try using the ${String.fromCodePoint(
      0x1f7e2
    )} button if the CV is too long!`,
    "",
    "Commands:",
    "'cv' - Print my CV to this terminal",
    "'cv --download' - Download my CV in text format",
    "'skills' - Print a list of my technical skills",
    "'experience' - Print a list of my work experience",
    "'links' - Get a list of my links",
    "'help' - Print this list of commands",
    "'clear' - Clear the terminal",
  ];

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/james-alcock-424ba560/",
    },
    {
      name: "GitHub",
      url: "https://github.com/jalcock501",
    },
  ];


export { welcomeMessage, help, links };