// @ts-ignore
let categoriesAPI = axios.create({
  baseURL: "https://swapi.co/api/"
})
let _categories = []
let _categoryObject = {}
export default class CategroiesService {
  get categories() {
    return _categories
  }
  getCategories(success, fail) {
    categoriesAPI.get('')
      .then(res => {
        _categories = Object.keys(res.data)
        _categoryObject = res.data
        console.log(_categories)
        success()
      })
      .catch(error => {
        console.log(error)
        fail()
      })

  }
}