"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendingDataService = void 0;
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
    sendToken(res, token, status) {
        res.status(status).json({ token, success: true });
    }
    ;
}
;
exports.sendingDataService = new SendingDataService();
