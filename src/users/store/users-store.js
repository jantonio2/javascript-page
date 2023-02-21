const state = {
  currentPage: 0,
  users: []
}

const loadNextPage = async() => {
  throw new Error('Not implemented yet')
}

const loadPreviousPage = async() => {
  throw new Error('Not implemented yet')
}

const onUserChanged = () => {
  throw new Error('Not implemented yet')
}

const reloadPage = async() => {
  throw new Error('Not implemented yet')
}

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  getUsers: () => [...state.users],
  getCurrentPage: () => state.currentPage
}