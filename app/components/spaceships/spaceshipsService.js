let _spaceshipsAPI = {
  baseURL: "https://swapi.co/api/starships/"
}
let _spaceships = []
let _nextUrl = ''
let _prevUrl = ''
export default class SpaceShipsService {
  get spaceships() {
    return _spaceships
  }

  get next() {
    return _nextUrl
  }
  get prev() {
    return _prevUrl
  }
  getSpaceships() {
    _spaceshipsAPI.get('')
      .then(res => {
        _spaceships = res.data.results
        _nextUrl = res.data.next
        _prevUrl = res.data.previous
      })
      .catch(error => {
        console.log(error)
      })
  }
}