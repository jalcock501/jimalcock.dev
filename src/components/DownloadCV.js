// Desc: Component to download a CV
// Usage:
//   import { DownloadCV } from './components/DownloadCV';
//   DownloadCV();

import { cv } from './CV';

export const DownloadCV = () => {
    const element = document.createElement("a");
    const file = new Blob([cv.join("\n")], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "CV-JimAlcock.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}
