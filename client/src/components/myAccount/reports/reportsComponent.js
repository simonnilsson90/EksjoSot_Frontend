import SideNav from "../sideNav/sideNavComponent"
import "./reportComponent.css"
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';

function Reports () {

    return (
       <div className="parentDiv">
<SideNav/>

        <div className="marginParent">
        <h1>Reports</h1>
        <h1>Data Sets Dashboard</h1>

        <div class="flex-container">
  <div class="flex-item-left">
  <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
  </div>
  <div class="flex-item-right">
  <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
  </div>
</div>
<div class="flex-container">
  <div class="flex-item-left">
  <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
  </div>
  <div class="flex-item-right"><BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    /></div>
</div>


       
       
       
       
        </div>
       </div> 
    )
}
export default Reports