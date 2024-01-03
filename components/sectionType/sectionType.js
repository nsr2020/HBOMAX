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
import { encenderSectionTrailer } from "../../utils/interruptorSectionTrailer"
import { createGeneralSection, sectionGeneral } from "../sectionGeneral/sectionGeneral"
import { createSectionTrailer } from "../sectionTrailer/sectionTrailer"
import "./sectionType.css"


export const sectionType = document.createElement("section")

export const createSectionType = (pelis) =>{
  sectionType.innerHTML =""
  sectionType.classList.add("sectionType")

  for( const peli of pelis ){
      const article = document.createElement("article")
      article.classList.add("article1")
      const divImg = document.createElement("div")
      const img = document.createElement("img")

      divImg.classList.add("divImg1")

      img.src = peli.imagen
      img.alt = peli.titulo

      const h4 = document.createElement("h4")
      h4.textContent = `"${peli.titulo}"`

      const p = document.createElement("p")
      p.textContent = `Precio: ${peli.precio}€`

      const divBtns = document.createElement("div")
      divBtns.classList.add("divBtns")

      const btnAtras = document.createElement("button")
      const btnTrailer = document.createElement("button")

      btnAtras.textContent="❌"
      btnTrailer.textContent = "🎥"
      btnTrailer.classList.add(`${peli.id}`)

      divImg.append(img)
      article.append(divImg)
      article.appendChild(h4)
      article.append(p)

      divBtns.append(btnAtras)
      divBtns.append(btnTrailer)
      article.append(divBtns)

      sectionType.append(article)
      btnAtras.addEventListener("click", () =>{
        sectionType.style.display="none"
        encenderFooter()
        encenderGeneralSection()
       createGeneralSection()
      })

      btnTrailer.addEventListener("click", () =>{
        sectionType.style.display ="none"
        encenderSectionTrailer()
        for (let peli of pelis){
          if(peli.id === btnTrailer.classList.value){
            console.log(btnTrailer.classList.value);
        createSectionTrailer(peli.trailer.src, 1)
          }
        }
      })

    }
    document.body.append(sectionType)
    

}