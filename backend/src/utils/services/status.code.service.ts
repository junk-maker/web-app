function statusCode(type: string): number {
    switch(type) {
        // case 'Uid not found': return 401;
        // case 'User not found': return 401;
        // case 'City not found': return 401;
        // case 'Please provide id': return 400;
        // case 'User id not found': return 401;
        // case 'Please provide uid': return 400;
        // case 'Password not found': return 401;
        // case 'Please provide mass': return 400;
        // case 'Please provide data': return 400;
        // case 'Please provide login': return 400;
        // case 'Please provide an ID': return 401;
        // case 'Please provide price': return 400;
        // case 'Region list not found': return 401;
        // case 'Please provide rights': return 400;
        // case 'Please provide region': return 400;
        // case 'Please provide user id': return 400;
        // case 'List of mass not found': return 401;
        // case 'Please provide city id': return 400;
        // case 'Please provide register': return 400;
        // case 'Please provide password': return 400;
        // case 'Please provide district': return 400;
        // case 'Please provide position': return 400;
        // case 'Password does not match': return 401;
        // case 'User already registered': return 401;
        // case 'Please provide region id': return 400;
        // case 'List of prices not found': return 401;
        // case 'List of cities not found': return 401;
        // case 'List of regions not found': return 401;
        // case 'Please provide description': return 400;
        // case 'List of templates not found': return 401;
        // case 'List of districts not found': return 401;
        // case 'List of positions not found': return 401;
        // case 'Please provide translations': return 400;
        // case 'List of addresses not found': return 401;
        // case 'Please provide your id and password': 400;
        // case 'Please provide addresses template id': return 400;
        default: return 500;
    };
};

export default statusCode;