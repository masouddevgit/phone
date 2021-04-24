import React, { useEffect, useState } from 'react';
import { getDataGrid} from "./ListService";



 const api = async () => {


     

            let items = await getDataGrid();
            console.log(items);
      
   
}
export default api;