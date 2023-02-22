import { localhostUserToModel } from '../mappers/localhost-user.mapper'
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper'
import { User } from '../models/user'

/**
 * 
 * @param {Object<User>} user 
 */
export const saveUser = async( userData ) => {
  
  const user = new User( userData )

  if ( !user.firstName || !user.lastName )
    throw 'First and last name are required'

  if ( !user.balance )
    throw 'Balance is required'

  const userToSave = userModelToLocalhost( user )
  let userUpdated = ( user.id ) 
                      ? await updateUser( userToSave ) 
                      : await createUser( userToSave )

  return localhostUserToModel( userUpdated )

}

const createUser = async( user ) => {

  const url = `${ import.meta.env.VITE_BASE_URL }/users`
  const res = await fetch( url, {
    method: 'POST',
    body: JSON.stringify( user ),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const newUser = await res.json()

  console.log({ newUser })
  return newUser

}

const updateUser = async( user ) => {

  const url = `${ import.meta.env.VITE_BASE_URL }/users/${ user.id }`
  const res = await fetch( url, {
    method: 'PATCH',
    body: JSON.stringify( user ),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const updatedUser = await res.json()

  console.log({ updatedUser })
  return updatedUser

}