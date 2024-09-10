import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class JobsService{
    async getJobById(jobId) {
        const job = await dbContext.Jobs.findById(jobId)

        if (job == null) {
            throw new BadRequest(`Can't find job by that ID`)
        }
        return job

    }




    async getJobs(){
        const jobs = await dbContext.Jobs.find()
        return jobs
    }

}



export const jobsService = new JobsService()