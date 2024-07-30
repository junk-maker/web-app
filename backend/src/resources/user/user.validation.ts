import UserModel from '@/resources/user/user.model';

class UserValidation {
    private user = UserModel;

    public async login(id: number, password: string): Promise<string> {
        if (!id || !password) {
            throw new Error('Please provide your id and password');
        };

        let user = await this.user.findOne({uid: id}).select('+password');

        if (!user) {
            throw new Error('User not found');
        };

        if (!await user.matchPassword(password)) {
            throw new Error('Password not found');
        };

        let token = user.getSignedJwtToken();
        
        return token;
    };

    public async register(id: number, password: string): Promise<string> {
        if (!id || !password) {
            throw new Error('Please provide your id and password');
        };

        if (await this.user.findOne({uid: id})) {
            throw new Error('User already registered');
        };

        await this.user.create({uid: id, password});

        let user = await this.user.findOne({uid: id});

        if (!user) {
            throw new Error('User not found');
        };

        user.getToken();
        await user.save();

        let token = user.getSignedJwtToken();

        return token;
    };
};

export const userValidation = new UserValidation();