import CharactersController from "./components/characters/characters-controller.js";
import CategoriesController from "./components/categories/categories-controller.js";
import SpaceshipsController from "./components/spaceships/spaceshipsController.js";

class App {
  constructor() {
    this.controllers = {
      charactersController: new CharactersController(),
      categoriesController: new CategoriesController(),
      spaceshipsController: new SpaceshipsController()
    }
  }
}


window.app = new App()

console.log("The app is up and running")
