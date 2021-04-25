import { sp } from '@pnp/sp';

export const ServiceBase= () => {
 
        sp.setup({
            sp: {
                headers: {
                    "Accept": "application/json; odata=verbose"
                }
            }
        });

};