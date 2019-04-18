class Singleton {
  static _instance

  static instance() {
    if (!this._instance) {
      this._instance = new Singleton()
    }

    return this._instance
  }
}

module.exports = Singleton
