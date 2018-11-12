import SpaceShipsService from "./spaceshipsService.js";

let _spaceshipSerive = new SpaceShipsService()

function _draw() {

  // create a template
  let SpaceshipTemplate = ''
  let actionsTemplate = ''

  //build action buttons
  if (_spaceshipSerive.prev) {
    actionsTemplate += `<button onclick="app.controllers.SpaceshipController.getSpaceship('${_SpaceshipService.prev}')">Prev</button>`
  }
  if (_spaceshipSerive.next) {
    actionsTemplate += `<button onclick="app.controllers.SpaceshipController.getSpaceship('${_SpaceshipService.next}')">Next</button>`
  }
  // loop through Spaceship
  _spaceshipSerive.spaceships.forEach(character => {
    SpaceshipTemplate += `<div class="character">${character.name}</div>`
  })

  // set elements with appropriate data
  document.getElementById("category-title").innerText = "Spaceship"
  document.getElementById("category-description").innerText = "The many Spaceship of star wars"
  document.getElementById("category-actions").innerHTML = actionsTemplate
  document.getElementById("category-data").innerHTML = SpaceshipTemplate
}
export default class SpaceshipsController {

}