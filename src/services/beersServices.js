import Axios from "../lib/axios";


class BeersServices {

  /**
   * Get Service Beers
   * @return {Promise<*>}
   */
  static async getBeers (path) {
    try{
      let result = null
      result = Axios.get(path)
      return result
    }catch (e) {
      console.error('[Services][BeersServices][getBeers] An error occures when fetching beers')
    }
  }
}

export default BeersServices
