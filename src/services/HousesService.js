import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HousesService{
    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)

        if (house == null) {
            throw new BadRequest(`can't find a house by ${houseId}`)
        }

        return house
    }


    async getHouses(query){
        const sortBy = query.sort
        delete query.sort

        const pageNumber = parseInt(query.page) || 1
        const limitAmount = 10
        const skipAmount = (pageNumber - 1) * limitAmount
        delete query.page

        
        const houses = await dbContext.Houses.find(query)
            .sort(sortBy + 'createdAt')
            .skip(skipAmount)
            .limit(limitAmount)
            .populate('creator')

        const houseCount = await dbContext.Houses.countDocuments(query)    
        return{
            
        results: houses,
        count: houseCount,
        currentPage: pageNumber,
        totalPages: Math.ceil(houseCount / limitAmount)
    }
}


export const housesService = new HousesService()