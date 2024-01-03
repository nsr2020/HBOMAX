import {
  apagarGeneralSection,
  encenderGeneralSection
} from '../../utils/InterruptorGeneralSection'

import { createGeneralSection, sectionGeneral } from '../sectionGeneral/sectionGeneral'
import './footer.css'


export const createFooter = () => {
  const footer = document.createElement('footer')
  footer.setAttribute('id', 'footer')
  footer.classList.add('footer')

  const imgAtras = document.createElement('img')
  const imgMain = document.createElement('img')
  const imgPelis = document.createElement('img')
  const imgSeries = document.createElement('img')

  imgAtras.src =
    'https://res.cloudinary.com/dnju3aw4b/image/upload/v1703797444/hbomax/atras_uzxxoc.png'
  imgAtras.alt = 'logo Atrás'
  imgMain.src =
    'https://res.cloudinary.com/dnju3aw4b/image/upload/v1703793979/hbomax/house_cjtqfv.png'
  imgMain.alt = 'logo Main'
  imgPelis.src =
    'https://res.cloudinary.com/dnju3aw4b/image/upload/v1703793979/hbomax/movies_bgy3jt.png'
  imgPelis.alt = 'log Pelis'
  imgSeries.src =
    'https://res.cloudinary.com/dnju3aw4b/image/upload/v1703793979/hbomax/series_kmlefv.png'
  imgSeries.alt = 'logo Series'

  footer.append(imgAtras)
  footer.append(imgMain)
  footer.append(imgPelis)
  footer.append(imgSeries)

  document.body.append(footer)

  imgAtras.addEventListener('click', () => {


    const footer = document.getElementById('footer')
    footer.classList.toggle("apagar")
    
    setTimeout(() => {
      footer.style.display ="none"
    }, 2000);

    const divApp = document.getElementById('app')
    divApp.classList.toggle("apagar");
    setTimeout(() => {
      divApp.style.display = 'flex';
    }, 2000);

    sectionGeneral.classList.toggle("apagar")
    setTimeout(()=>{
    apagarGeneralSection()
  },2000)
  })

  imgMain.addEventListener('click', () => {
    createGeneralSection('todo')
  })

  imgPelis.addEventListener('click', () => {
    createGeneralSection('peliculas')
  })
  imgSeries.addEventListener('click', () => {
    createGeneralSection('series')
  })
}
