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

  if ( user.id ) {
    throw `Not implemented yet`
    return
  }

  const updatedUser = await createUser( userToSave )
  return updatedUser

}

const createUser = async( user ) => {

  console.log({user})
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