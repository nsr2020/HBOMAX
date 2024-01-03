import { pelisAccion } from '../../data/pelisAccion.js'
import { pelisAventura } from '../../data/pelisAventura.js'
import { pelisComedia } from '../../data/pelisComedia.js'
import { pelisTerror } from '../../data/pelisTerror.js'
import { seriesAccion } from '../../data/seriesAccion.js'
import { seriesAventura } from '../../data/seriesAventura.js'
import { seriesTerror } from '../../data/seriesTerror.js'
import { seriesComedia } from '../../data/seriesComedia.js'
import { articleGenerator } from '../../utils/articleGenerator.js'

import { apagarGeneralSection, encenderGeneralSection } from '../../utils/InterruptorGeneralSection.js'

import './sectionGeneral.css'
import { apagarFooter } from '../../utils/interruptorFooter.js'
import { createDivMenu, divMenu } from '../divMenu/divMenu.js'


export const sectionGeneral = document.createElement('section')

export const createGeneralSection = (teatro) => {
  sectionGeneral.innerHTML = ''
  sectionGeneral.classList.add('sectiong')
  sectionGeneral.setAttribute('id', 'sectiong')
  encenderGeneralSection()

  const imgMenu = document.createElement("img")
  imgMenu.src ="https://res.cloudinary.com/dnju3aw4b/image/upload/v1704119514/hbomax/menuIcon_m2numx.png"
  imgMenu.classList.add("imgMenu")
  sectionGeneral.append(imgMenu)

  imgMenu.addEventListener("click",()=>{
            divMenu.style.display ="flex"
            divMenu.classList.add("mostrar")
            apagarFooter()
                 
        apagarGeneralSection()
           createDivMenu()
        
       
     
  })

  if (teatro === 'todo' || teatro === undefined) {
    console.log(teatro)
    articleGenerator(pelisAccion, sectionGeneral)
    articleGenerator(pelisAventura, sectionGeneral)
    articleGenerator(pelisComedia, sectionGeneral)
    articleGenerator(pelisTerror, sectionGeneral)
    articleGenerator(seriesAccion, sectionGeneral)
    articleGenerator(seriesAventura, sectionGeneral)
    articleGenerator(seriesComedia, sectionGeneral)
    articleGenerator(seriesTerror, sectionGeneral)
  } else if (teatro === 'peliculas') {
    console.log(teatro)
    articleGenerator(pelisAccion, sectionGeneral)
    articleGenerator(pelisAventura, sectionGeneral)
    articleGenerator(pelisComedia, sectionGeneral)
    articleGenerator(pelisTerror, sectionGeneral)
  } else if (teatro === 'series') {
    console.log(teatro)
    articleGenerator(seriesAccion, sectionGeneral)
    articleGenerator(seriesAventura, sectionGeneral)
    articleGenerator(seriesComedia, sectionGeneral)
    articleGenerator(seriesTerror, sectionGeneral)
  }

  document.body.append(sectionGeneral)
}
