import { petsService } from "../services/PetsService.js";
import BaseController from "../utils/BaseController.js";


export class PetsController extends BaseController{
    constructor(){
        super('api/pets')
        this.router
            .get('', this.getPets)
            .get('', this.getPetById)
    }
    async getPetById(request, response, next) {
        try {
            const petId = request.params.petId
            const pet = await petsService.getPetById(petId)
            response.send(pet)
        } catch (error) {
            next(error)
        }
    }



    async getPets(request, response, next){
        try {
            const pets = await petsService.getPets()
            response.send(pets)
        } catch (error) {
            next(error)
        }

    }
}