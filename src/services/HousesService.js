import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HousesService {
    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)

        if (house == null) {
            throw new BadRequest(`can't find a house by ${houseId}`)
        }

        return house
    }


    async getHouses(){
        const houses = await dbContext.Houses.find()
        return houses
    }
}


export const housesService = new HousesService()