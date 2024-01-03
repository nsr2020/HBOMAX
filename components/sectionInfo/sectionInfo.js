import { encenderGeneralSection } from "../../utils/InterruptorGeneralSection"
import { apagarFooter, encenderFooter } from "../../utils/interruptorFooter"
import { apagarSectionInfo } from "../../utils/interruptorSectionInfo"
import { encenderSectionTrailer } from "../../utils/interruptorSectionTrailer"
import { createGeneralSection } from "../sectionGeneral/sectionGeneral"
import { createSectionTrailer} from "../sectionTrailer/sectionTrailer"
import "./sectinoInfo.css"


export const sectionInfo = document.createElement("section")


export const createSectionInfo = (imagen, titulo, informacion, precio,trailer,) =>{
  sectionInfo.innerHTML = ""
  sectionInfo.classList.add("sectionInfo")

  const divimg = document.createElement("div")
  const img = document.createElement("img")

  divimg.classList.add("divImg")

  img.src = imagen


  const divInfo = document.createElement("div")
  const title = document.createElement("h3")
  const info = document.createElement("p")
  const price = document.createElement("p")
  const divBtn = document.createElement("div")
  const btnTrailer = document.createElement("button")
  
  const btnAtras = document.createElement("button")

  divInfo.classList.add("divInfo")
  divBtn.classList.add("divBtn")
  title.textContent = titulo
  info.textContent = informacion
  price.textContent = `${precio}€`
  btnTrailer.textContent= "🎥"
  btnAtras.textContent= "🔙"

  //addevenlistener
  btnAtras.addEventListener("click", ()=>{
    apagarSectionInfo()
    encenderFooter()
    createGeneralSection()
    encenderGeneralSection()

  })

  btnTrailer.addEventListener("click", ()=>{
    apagarFooter()
    apagarSectionInfo()
   createSectionTrailer(trailer, 2)
   encenderSectionTrailer()

  })



  divimg.append(img)

  divInfo.append(title)
  divInfo.append(info)
  divInfo.append(price)
  divBtn.append(btnAtras)
  divBtn.append(btnTrailer)
  divInfo.append(divBtn)

  sectionInfo.append(divimg)
  sectionInfo.append(divInfo)

  document.body.append(sectionInfo)

}