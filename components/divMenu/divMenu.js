const tipos =["Accion","Aventura","Comedia","Terror"]


import { pelisAccion } from "../../data/pelisAccion"
import { pelisAventura } from "../../data/pelisAventura"
import { pelisComedia } from "../../data/pelisComedia"
import { pelisTerror } from "../../data/pelisTerror"
import { seriesAccion } from "../../data/seriesAccion"
import { seriesAventura } from "../../data/seriesAventura"
import { seriesComedia } from "../../data/seriesComedia"
import { seriesTerror } from "../../data/seriesTerror"

import { encenderGeneralSection } from "../../utils/InterruptorGeneralSection"
import { encenderFooter } from "../../utils/interruptorFooter"
import { createGeneralSection } from "../sectionGeneral/sectionGeneral"
import { createSectionType, sectionType } from "../sectionType/sectionType"
import "./divMenu.css"


export const divMenu = document.createElement("div")

export const createDivMenu = () =>{
  divMenu.innerHTML=""
  divMenu.classList.add("divMenu")

  const imgAtras = document.createElement("img")
  imgAtras.src ="https://res.cloudinary.com/dnju3aw4b/image/upload/v1704125367/hbomax/580b57fcd9996e24bc43c456_zdwbth.png"

  const nav1 = document.createElement("nav")
  nav1.classList.add("nav1")
  const h4 = document.createElement("h4")
  h4.textContent ="PELICULAS"
  nav1.appendChild(h4)

  const ul = document.createElement("ul")

  for (let index = 0; index < tipos.length; index++) {
    
    const li = document.createElement("li")
    const a = document. createElement("a")
    a.textContent = tipos[index]
    a.classList.add(`${tipos[index]}`)
    li.appendChild(a)
    ul.append(li)

    a.addEventListener("click", async () => {
      await handleButtonClick();
    });
    
    async function handleButtonClick() {
      return new Promise(resolve => {
        if (a.classList.contains("Accion")) {
          console.log(a.classList);
          divMenu.style.display = "none";
          sectionType.style.display = "flex";
          createSectionType(pelisAccion);
        } else if (a.classList.contains("Aventura")) {
          sectionType.style.display = "flex";
          divMenu.style.display = "none";
          createSectionType(pelisAventura);
        } else if (a.classList.contains("Comedia")) {
          sectionType.style.display = "flex";
          divMenu.style.display = "none";
          createSectionType(pelisComedia);
        } else {
          sectionType.style.display = "flex";
          divMenu.style.display = "none";
          createSectionType(pelisTerror);
        }
        resolve();
      });
    }
    
  }

  nav1.appendChild(ul)

  const nav2 = document.createElement("nav")
  nav2.classList.add("nav2")
  const h4a = document.createElement("h4")
  h4a.textContent ="SERIES"
  nav2.append(h4a)

  const ul2 = document.createElement("ul")
  for (let index = 0; index < tipos.length; index++) {
   
    const li = document.createElement("li")
    const a = document. createElement("a")
    a.textContent = tipos[index]
    a.classList.add(`${tipos[index]}`)
    li.appendChild(a)
    ul2.append(li)

    a.addEventListener("click", ()=>{
      if (a.classList.contains("Accion")){
        divMenu.style.display="none"
        sectionType.style.display="flex"
        createSectionType(seriesAccion)
      }else if(a.classList.contains ("Aventura")){
        divMenu.style.display="none"
        sectionType.style.display="flex"
        createSectionType(seriesAventura)
      }else if (a.classList.contains ("Comedia")){
        divMenu.style.display="none"
        sectionType.style.display="flex"
        createSectionType(seriesComedia)
      }else if (a.classList.contains("Terror")){
        divMenu.style.display="none"
        sectionType.style.display="flex"
        createSectionType(seriesTerror)
      }
    })
    
  }
  nav2.appendChild(ul2)

  divMenu.append(imgAtras)
  divMenu.appendChild(nav1)
  divMenu.appendChild(nav2)

  document.body.append(divMenu)

  imgAtras.addEventListener("click", () =>{
    divMenu.classList.remove("mostrar")
   
    setTimeout(()=>{
      divMenu.style.display = "none"
      encenderFooter()
      encenderGeneralSection()
      createGeneralSection()
    },4000)
    
   

  })

}

