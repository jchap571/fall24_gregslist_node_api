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
        
        // const houses = await dbContext.Houses.find(query).sort(sortBy + 'createdAt') 
        // console.log(query)
        // return houses
        const pageNumber = parseInt(query.page) || 1
        const limitAmount = 10
        const skipAmount = (pageNumber -1) * limitAmount
        delete query.page

        const houses = await dbContext.Houses.find(query)
            .sort(sortBy + 'createdAt')
            .skip(skipAmount)
            .limit(limitAmount)

        const houseCount = await dbContext.Houses.countDocuments()

        return{
            results: houses,
            count: houseCount,
            currentPage: pageNumber, 
            totalPages: Math.ceil(houseCount / limitAmount)
        }

    
    
    }
}


export const housesService = new HousesService()