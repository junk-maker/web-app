import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {httpLinksService} from '../services/httpLinksService';

// export const authenticationStore = create((set, get) => ({
//     token: '',
//     loading: false,
//     success: false,
//     data: {
//         error: '',
//         success: false,
//     },
//     fetchAuth: async (id, type, password) => {
//         console.log('sdsdsds')
//         set({loading: true});
//         // let {data, token, success} = await httpLinksService.getApi(null, httpLinksService.auth()[type], {id, password}, null).post();
        
//         // if (success) {
//         //     set({loading: false, token, success});
//         // } else {
//         //     set({loading: false, data, success});
//         // };
//     },
// }));

// {
//     token: '',
//     loading: false,
//     success: false,
//     data: {
//         error: '',
//         success: false,
//     },
//     auth: async (id, type, password) => {
//         let {data, token, success} = await httpLinksService.getApi(null, httpLinksService.auth()[type], {id, password}, null).post();

//         if (success) {
            
//             // authenticationStore.set({token});
//             // authenticationStore.set({success});
//             // authenticationStore.set({loading: false});
//         } else {
//             // authenticationStore.set({data});
//             // authenticationStore.set({success: false});
//             // authenticationStore.set({loading: false});
//         };
//     },