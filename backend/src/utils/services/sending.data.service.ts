import {Response} from 'express';
// import Uid from '@/resources/uid/uid.interface';
// import Region from '@/resources/crm/region/region.interface';
// import MassEditor from '@/resources/crm/mass/mass.editor.interface';
// import CityEditor from '@/resources/crm/cities/cities.editor.interface';
// import PriceEditor from '@/resources/crm/prices/prices.editor.interface';
// import DistrictEditor from '@/resources/crm/districts/districts.editor.interface';
// import PositionsEditor from '@/resources/crm/positions/positions.editor.interface';
// import {AddressEditor} from '@/resources/crm/addresses/addresses.editor.interface';
// import {AddressTemplateEditor} from '@/resources/crm/addresses/addresses.template.editor.interface';

class SendingDataService {
    sendToken(res: Response, token: string, status: number): void {
        res.status(status).json({token, success: true});
    };

    // sendUid(res: Response, uid: Uid, status: number): void {
    //     res.status(status).json({uid, success: true});
    // };

    // jsonResponseMessage(res: Response, data: void | string | (string | void)[], status: number): void {
    //     res.status(status).json({data, success: true});
    // };

    // jsonResponsCityMessage(res: Response, cities: string | CityEditor[], status: number): void {
    //     res.status(status).json({cities, success: true});
    // };

    // jsonResponsPriceMessage(res: Response, prices: string | PriceEditor[], status: number): void {
    //     res.status(status).json({prices, success: true});
    // };

    // jsonResponsPositionMessage(res: Response, positions: string | PositionsEditor[], status: number): void {
    //     res.status(status).json({positions, success: true});
    // };

    // jsonResponsMassMessage(res: Response, mass: string | MassEditor[], status: number): void {
    //     res.status(status).json({mass, success: true});
    // };

    // jsonResponsDistrictMessage(res: Response, districts: string | DistrictEditor[], status: number): void {
    //     res.status(status).json({districts, success: true});
    // };

    // jsonResponsRegionMessage(res: Response, region: Region[], status: number): void {
    //     res.status(status).json({region, success: true});
    // };

    // jsonResponsAddressTemplateMessage(res: Response, templates: string | AddressTemplateEditor[], status: number): void {
    //     res.status(status).json({templates, success: true});
    // };

    // jsonResponsAddressMessage(res: Response, addresses: string | AddressEditor[], status: number): void {
    //     res.status(status).json({addresses, success: true});
    // };
        
    // sendWalletData(res: Response, data: string | Buffer, status: number) {
    //     res.status(status).json({data, success: true});
    // };
};

export const sendingDataService = new SendingDataService();