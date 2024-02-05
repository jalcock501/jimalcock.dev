import { useState } from 'react';
import Terminal , {
    ColorMode,
    TerminalInput,
    TerminalOutput,
    } from 'react-terminal-ui';
import { welcomeMessage, help, links } from './Constants';
import { title, contact, summary, skills, experience, lifestyle, cv } from './CV';
import { DownloadCV } from './DownloadCV';


const TerminalController = (props = {}) => {

  let terminalWelcomeMessage = welcomeMessage.concat(help);
  console.log(terminalWelcomeMessage)
  let terminalWelcomeMessageData = [];
  for (let line = 0; line < terminalWelcomeMessage.length; line++) {
    terminalWelcomeMessageData.push(
      <TerminalOutput key={line}>{terminalWelcomeMessage[line]}</TerminalOutput>
    );
  }
  
  const [terminalLineData, setTerminalLineData] = useState(terminalWelcomeMessageData);

  const [terminalHeight, setTerminalHeight] = useState('60vh');

  // set color mode dark as initial state
  const [colorMode, setColorMode] = useState(ColorMode.Dark);

  // toggle color mode
  function toggleColorMode(e) {
    e.preventDefault();
    setColorMode(
      colorMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light
    );
  };

  const btnClasses = ["btn"];
  if (colorMode === ColorMode.Light) {
    btnClasses.push("btn-dark");
  } else {
    btnClasses.push("btn-light");
  }

  function toggleTerminalHeight() {
    setTerminalHeight(
    terminalHeight === "60vh" || terminalHeight === "0px" ? "80vh" : "60vh"
    );
  };

  // handle input
  function onInput(input) {
    const Output = (item) => {
      ld = []
      setTerminalLineData(ld);
      for (let line = 0; line < item.length; line++) {
        ld.push(<TerminalOutput>{item[line]}</TerminalOutput>);
      }
    }

    let ld = [...terminalLineData];
    ld.push(<TerminalInput>{input}</TerminalInput>);

    switch (input.toLocaleLowerCase().trim()) {
      case 'cv':
        Output(cv);
        break;
      case 'lifestyle':
        Output(lifestyle);
        break;
      case 'contact':
        Output(contact);
        break;
      case 'summary':
        Output(summary);
        break;
      case 'skills':
        Output(skills);
        break;
      case 'experience':
        Output(experience);
        break;
      case 'cv --download':
        DownloadCV();
        break;
      case 'links':
        links.forEach(function (link, index) {
          ld.push(
            <TerminalOutput>
              {link.name}:{" "}
              <a href={link.url} target="_blank">
                {link.url}
              </a>
            </TerminalOutput>
          );
        });
        break;
      case 'help':
        Output(help);
        break;
      case 'clear':
        ld = [];
        break;
      default:
        ld.push(<TerminalOutput>Unrecognized command</TerminalOutput>);
        break;
      }
  
    // set line data
    setTerminalLineData(ld);
  };

  // Yellow button click
  const yellowBtnClick = () => {
      // toggle terminal height
      if (terminalHeight === "0px") { setTerminalHeight("60vh"); }
      else{ setTerminalHeight("0px"); }
    };

  const greenBtnClick = () => {
    // toggle terminal height
    toggleTerminalHeight();
    // toggle container width
    if (
      document.getElementById("terminal-container").className ===
      "container-fluid"
    ) {
      document.getElementById("terminal-container").className = "container";
    } else {
      document.getElementById("terminal-container").className =
        "container-fluid";
    }
  };

    // Terminal has 100% width by default so it should usually be wrapped in a container div
    return (
      <div className="container" id="terminal-container">
        <div className="d-flex flex-row-reverse p-2">
          <button className={btnClasses.join(" ")} onClick={toggleColorMode}>
            Enable {colorMode === ColorMode.Light ? "Dark" : "Light"} Mode
          </button>
      </div>
        <Terminal 
          height={terminalHeight} 
          colorMode={ colorMode }  
          onInput = { onInput }
          prompt="[Jim's Terminal] $"
          yellowBtnCallback={ yellowBtnClick }
          greenBtnCallback={ greenBtnClick }
        >
          { terminalLineData }
        </Terminal>
      </div>
    )
};

export default TerminalController;