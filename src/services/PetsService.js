import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PetsService{
    async getPetById(petId) {
        const pet = await dbContext.Pets.findById(petId)

        if (pet == null) {
            throw new BadRequest(`can't find pet by that ID`)
            
        }
        return pet
        
    }




    async getPets(){
        const pets = await dbContext.Pets.find()
        return pets
    }
}



export const petsService = new PetsService()