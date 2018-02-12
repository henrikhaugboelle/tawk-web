import localStorage from 'local-storage'

class Storage {
  static setItem(key, value) {
    return new Promise((resolve) => {
      resolve(localStorage.set(key, value))
    })
  }

  static setItemSync(key, value) {
    localStorage.set(key, value)
  }

  static getItem(key) {
    return new Promise((resolve) => {
      resolve(localStorage.get(key))
    })
  }

  static removeItem(key) {
    return new Promise((resolve) => {
      resolve(localStorage.remove(key))
    })
  }
}

export default Storage
