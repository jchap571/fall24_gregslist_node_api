import BaseController from "../utils/BaseController";




export class HousesController extends BaseController{
    constructor(){
        super('api/houses')
        this.router
            .get('', this.getHouses)
    }
    getHouses(request, response, next) {
        try {
           response.send('Houses controller is working!')
        } catch (error) {
            next(error)
        }
    }

}