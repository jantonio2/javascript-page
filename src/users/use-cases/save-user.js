import { User } from '../models/user'

/**
 * 
 * @param {Object<User>} user 
 */
export const saveUser = async( userData ) => {
  
  const user = new User( userData )

  //TODO: a mapper is needed here

  if ( user.id ) {
    throw `Not implemented yet`
    return
  }

  const updatedUser = await createUser( user )
  return updatedUser

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