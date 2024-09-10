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


    async getHouses(query){
        // const houses = await dbContext.Houses.find(query)
        const sortBy = query.sortBy
        delete query.sortBy
        
        const houses = await dbContext.Houses.find(query).sort(sortBy + 'createdAt') 
        return houses
    }
}


export const housesService = new HousesService()