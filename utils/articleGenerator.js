import { createSectionInfo } from '../components/sectionInfo/sectionInfo'
import { apagarGeneralSection } from './InterruptorGeneralSection'

import { apagarFooter } from './interruptorFooter'
import { encenderSectionInfo } from './interruptorSectionInfo'

export const articleGenerator = (movies, sectionGeneral) => {
  const article = document.createElement('article')

  article.classList.add('article')
  const h3 = document.createElement('h3')
  const divCarrete = document.createElement('div')
  divCarrete.classList.add('divcarrete')

  h3.textContent = `"${movies[0].titulo}"`

  for (let movie of movies) {
    const divMovie = document.createElement('div')
    const imgMovie = document.createElement('img')
    const botonInfo = document.createElement('button')

    imgMovie.src = movie.imagen
    botonInfo.textContent = 'ℹ'
    imgMovie.setAttribute('id', movie.id)
    imgMovie.id = movie.id

    divMovie.append(imgMovie)
    divMovie.append(botonInfo)

    divCarrete.append(divMovie)

    imgMovie.addEventListener('click', () => {
      h3.textContent = `"${movie.titulo}"`
    })

    botonInfo.addEventListener('click', () => {
      apagarGeneralSection()
      apagarFooter()
      createSectionInfo(
        movie.imagen,
        movie.titulo,
        movie.informacion,
        movie.precio,
        movie.trailer.src,

      )
      encenderSectionInfo()
    })
  }
  article.append(h3)
  article.append(divCarrete)

  sectionGeneral.append(article)
}
