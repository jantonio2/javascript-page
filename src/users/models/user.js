export class User {

  /**
   * 
   * @param {Object<User>} userData 
   */
  constructor({ id, isActive, balance, avatar, firstName, lastName, gender }) {
    this.id = id
    this.isActive = isActive
    this.balance = balance
    this.avatar = avatar
    this.first_name = firstName
    this.last_name = lastName
    this.gender = gender
  }

}