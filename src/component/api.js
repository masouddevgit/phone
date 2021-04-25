import React, { useEffect, useState } from 'react';
import { getDataGrid} from "./ListService";
import { ServiceBase } from './../Config';


const Api = async () => {
    const [datatable, setDatatable] = useState({ columns: [], rows: [] });
    useEffect(() => {
      async function callGetDataGrid() {
            ServiceBase();
            let items = await getDataGrid();
            console.log(items);
        }
        callGetDataGrid();
    },[datatable])
    return (
               <>
               <p>salamamsamsamsdsa</p>
              </>
             )
}
// export default Api;
// class Api extends React.Component {
//     constructor(props) {
//       super(props);

//     }
//     async componentDidMount() {
//         ServiceBase();
     
//           const item = await getDataGrid();
//           console.log(item)
       
// }
// render() {
//     return (
//       <>
//       <p>salamamsamsamsdsa</p>
//       </>
//     )
// }
// }
// export default Api;