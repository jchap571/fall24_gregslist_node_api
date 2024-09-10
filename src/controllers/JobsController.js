import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";



export class JobsController extends BaseController{
    constructor(){
        super('api/jobs')
        this.router
            .get('', this.getJobs)
            .get('', this.getJobById)
    }

    async getJobs(request, response, next){
        try {
            const jobs = await jobsService.getJobs()
        } catch (error) {
            next(error)
        }
    }


    async getJobById(request, response, next){
        try {
            cosnt jobId = request.params.jobId
            const job = await jobsService.getJobById(jobId)
        } catch (error) {
            next(error)
        }
    }


}