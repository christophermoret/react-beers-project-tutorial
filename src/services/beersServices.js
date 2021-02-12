import Axios from "../lib/axios";


class BeersServices {

  /**
   *
   * @return {Promise<void>}
   */
  static async GetBeers (path) {
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
