
import {userValidation} from '@/resources/user/user.validation';
import {Router, Request, Response, NextFunction} from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import {sendingDataService} from '@/utils/services/sending.data.service';

class UserController implements Controller {
    public path = '/auth';
    public router = Router();
    private UserValidation = userValidation;
    private SendingDataService = sendingDataService;

    constructor() {
        this.routes();
    };

    private routes(): void {
        this.router.post(`${this.path}/sign-in`, this.login);
        this.router.post(`${this.path}/sign-up`, this.register);
    };

    private login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        let {id, password} = req.body;
        
        try {   
            let response = await this.UserValidation.login(id, password);

            this.SendingDataService.sendToken(res, response, 200);
        } catch (err) {
            return next(err);
        };
    };

    private register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        let {id, password} = req.body;

        try {
            let response = await this.UserValidation.register(id, password);
       
            return this.SendingDataService.sendToken(res, response, 200);
        } catch(err) {
            return next(err);
        };
    };
};

export default UserController;