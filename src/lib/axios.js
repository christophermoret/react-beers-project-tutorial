const axios = require('axios');

class Axios {

  /**
   * Axios get
   * @param {String} url - url to fetch
   * @return {Promise<*>}
   */
  static async get(url) {
    try {
      let result = null
      result = await axios.get(url)
      if (result.status !== 200) throw new Error('Beers api gave an error! XD')
      return result.data
    } catch (e) {
      console.error('[Axios][get] An error has occured on get method', e)
    }
  }
}

export default Axios
