import "./App.css"
import User from "./components/User"
import Skills from "./components/Skills"
import Profil from "./components/Profil"
import Cursus from "./components/FormationsExperiences"
import DarkMode from "./components/DarkMode"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
// import { Preview, print } from "react-html2pdf"
import React, { useRef } from "react";
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

function App() {

    const pdfRef = useRef();

    const name = "Nicolas"
    const lastName = "Pedenau"

    const handleGenerateCv = () => {
        const input = pdfRef.current;
        html2canvas(input, {
            scale: 1
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/jpg');
            const pdf = new jsPDF('p', 'mm', [210, 297]);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pdfWidth;
            const imgHeight = pdfHeight;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = 0;
            const imgY = 0;
            pdf.addImage(imgData, 'jpg', imgX, imgY * ratio, imgWidth * ratio, imgHeight * ratio);
            pdf.save(`CV_${name}-${lastName}`);
        })
    }

    return (
        <div className="App" ref={ pdfRef }>
            <div className="grid__container">
            <div className="sidebar">
                <div className="actions">
                <DarkMode />
                <button onClick={handleGenerateCv}>
                    <PictureAsPdfIcon />
                </button>
                </div>
                <User nom={`${name} ${lastName}`} />
                <Skills />
            </div>
            <div className="main">
                <Profil />
                <Cursus />
            </div>
            </div>
        </div>
    )
}

export default App
