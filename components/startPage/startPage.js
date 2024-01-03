import { encenderFooter } from '../../utils/interruptorFooter'
import { encenderGeneralSection } from '../../utils/InterruptorGeneralSection'
import { createGeneralSection, sectionGeneral } from '../sectionGeneral/sectionGeneral'
import './startPage.css'


export const createstartPageHbo = () => {
  const divApp = document.getElementById('app')
  const imghbo = document.createElement('img')

  imghbo.src =
    'https://res.cloudinary.com/dnju3aw4b/image/upload/v1703777307/hbomax/hbologo_ymy0ot.png'
  imghbo.alt = 'Hbo logo'
  imghbo.classList.add('imghbo')

  divApp.append(imghbo)

  imghbo.addEventListener('click', () => {
    divApp.classList.toggle("apagar")
   
    setTimeout(() => {
      divApp.style.display = 'none';
    }, 2000);
    
    const footer = document.getElementById('footer')
    footer.classList.remove("apagar")
    setTimeout(()=>{
      encenderFooter()
    },2000)
    sectionGeneral.classList.remove("apagar")
    encenderGeneralSection()
    createGeneralSection()
  })
}
