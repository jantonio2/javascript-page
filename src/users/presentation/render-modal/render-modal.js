import modalHtml from './render-modal.html?raw'
import './render-modal.css';

let modal, form

//TODO: load a user by id
export const showModal = () => {
  modal?.classList.remove('hide-modal')
}

export const hideModal = () => {
  modal?.classList.add('hide-modal')
  form?.reset()
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(Object<User>) => Promise<void>} callback 
 */
export const renderModal = ( element, callback ) => {
  
  if ( modal ) return

  modal = document.createElement('div')
  modal.innerHTML = modalHtml
  modal.className = 'modal-container hide-modal'
  form = modal.querySelector('form')

  modal.addEventListener('click', ( event ) => {
    if ( event.target.className === 'modal-container' ) {
      hideModal()
    }
  })

  form.addEventListener('submit', async( event ) => {
    event.preventDefault()

    const formData = new FormData( form )
    const user = {}

    for (const [ key, value ] of formData) {
      if ( key === 'balance' ) {
        user[ key ] = +value
        continue
      }

      if ( key === 'isActive' ) {
        user[ key ] = ( value === 'on' ) ? true : false
        continue
      }
      
      user[ key ] = value
    }

    // console.log( user )
    await callback( user )

    hideModal()
  })

  element.append( modal )

}