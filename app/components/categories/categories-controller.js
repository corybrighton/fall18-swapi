import CategroiesService from "./categories-service.js";

let _categoriesService = new CategroiesService()

function _draw() {

  let template = ''
  _categoriesService.categories.forEach(category => {
    template += `<button onclick="">${category.charAt(0).toUpperCase() + category.substr(1)}</button>`
  });
  document.getElementById("categories").innerHTML = template
}
function _drawFail() {
  console.log("failed to get Categories")
}
export default class CategoriesController {
  constructor() {
    _categoriesService.getCategories(_draw, _drawFail)
  }
}