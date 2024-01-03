import "./sectionTrailer.css"
import { apagarSectionTrailer } from "../../utils/interruptorSectionTrailer"
import { apagarSectionInfo, encenderSectionInfo } from "../../utils/interruptorSectionInfo"
import { sectionType } from "../sectionType/sectionType"
import { sectionInfo } from "../sectionInfo/sectionInfo"

export const sectionTrailer = document.createElement("section")

export const createSectionTrailer = (trailer, number) =>{
  sectionTrailer.innerHTML=""
  sectionTrailer.classList.add("sectionTrailer")

  const divIframe = document.createElement("div")
  divIframe.classList.add("divIframe")
  const btnAtras = document.createElement("button")
  const iframe = document.createElement("iframe")

  iframe.src = trailer + "?autoplay=1";
  iframe.width = "300px"
  iframe.height= "300px"
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  iframe.allowFullscreen = true
  /* iframe.sandbox = ""; */

    iframe.addEventListener("load", function() {
      // Manejar la carga del iframe
  });
  iframe.addEventListener("error", function(event) {
    console.error("Error cargando el iframe:", event);
  });
 

  btnAtras.textContent ="❌"
  sectionTrailer.append(btnAtras)
  divIframe.append(iframe)
  sectionTrailer.append(divIframe)

  document.body.append(sectionTrailer)

  btnAtras.addEventListener("click", ()=>{

    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    if (number === 1){
      
    sectionType.style.display="flex"
    apagarSectionTrailer()
  
    }else if(number === 2){
      apagarSectionTrailer()
      encenderSectionInfo()
    }
  })

}



