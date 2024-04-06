import SideNav from "../sideNav/sideNavComponent"
import "./reportComponent.css"
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartContainer, BarPlot } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { green, red } from "@mui/material/colors";
import { grey } from "@material-ui/core/colors";


function Reports () {

  const uData = [50, 60, 50, 40, 10];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  
];

const pData = [20, 64, 90, 44, 35, ];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  
];

const dataSets = [
  'Dataset 1',
  'Dataset 2',
  'Dataset 3',
  'Dataset 4',
  'Dataset 5'
]



const uData2 = [240, 139];
const xLabels2 = [
  'Page A',
  'Page B',
  
];



    return (
<>
<div class="flex-container-test">
  
  <div class="flex-item-left-test">
  <SideNav/> 
  </div>
  <div class="flex-item-right-test"> 
  
  <h2 className=" margin2">Reports</h2>
        <h2 className=" margin2">Data Sets Dashboard</h2>

        <div class="flex-container">
        
        <div class="flex-item-left">

<div className="textMargin">
<p className="smaller">Usage Over Time</p>
<h2 className="bigger">12gb</h2>
<p className="smallerBlue">Last 6 Months</p>
</div>

<div style={{ marginLeft: '-48px', marginBottom: '-60px' }}>
<ChartContainer
width={550}
height={320}
series={[{ type: 'line', data: pData }]}
xAxis={[{ scaleType: 'point', data: months }]}
sx={{
  '.MuiLineElement-root': {
    stroke: '#4A789C',
    strokeWidth: 3,
  },
  '.MuiMarkElement-root': {
    stroke: '#4A789C',
    scale: '0.6',
    fill: '#fff',
    strokeWidth: 3,
    visibility: 'hidden',
  },
}}
disableAxisListener
>
<LinePlot />
<MarkPlot />
</ChartContainer>
</div>
<div className="months">

<p>Jan</p>
<p>Feb</p>
<p>Mar</p>
<p>Apr</p>
<p>May</p>
<p>June</p>
</div>

</div>
  <div class="flex-item-right">
  <div className="textMargin">
  <p className="smaller">Top Selling Datasets</p>
<p className="smallerBlue">Last 6 Months</p>
  </div>
 
  <div style={{  marginTop: '30px' ,marginLeft: '-60px', marginBottom: '-60px', paddingBottom: '-60px', }}>
  <ChartContainer
      width={550}
      height={345}
      series={[{ data: uData, label: 'uv', type: 'bar',  color: 'rgba(232, 237, 245, 1)' }]}
      xAxis={[{ scaleType: 'band', data: xLabels }]}
      
    >
      <BarPlot />
    </ChartContainer>
    
  </div>
  <div className="months">
<p>Dataset 1</p>
<p>Dataset 2</p>
<p>Dataset 3</p>
<p>Dataset 4</p>
<p>Dataset 5</p>
<p>Dataset 6</p>
</div>
</div>
</div>
<h2 className=" margin2">Sales History and Revenue Tracking</h2>
<div class="flex-container">
          <div class="flex-item-left">

<div className="textMargin">
<p className="smaller">Sales Over Time</p>
<h2 className="bigger">$100K</h2>
<p className="smallerBlue">Last 6 Months</p>
</div>

<div style={{ marginLeft: '-48px', marginBottom: '-60px' }}>
<ChartContainer
width={550}
height={320}
series={[{ type: 'line', data: pData,  }]}
xAxis={[{ scaleType: 'point', data: months }]}
sx={{
  '.MuiLineElement-root': {
    stroke: '#4A789C',
    strokeWidth: 3,
  },
  '.MuiMarkElement-root': {
    
    scale: '0.6',
    stroke: '#4A789C',
    strokeWidth: 3,
    visibility: 'hidden',
    
  },
}}
disableAxisListener
>
<LinePlot />
<MarkPlot />
</ChartContainer>
</div>
<div className="months">

<p>Jan</p>
<p>Feb</p>
<p>Mar</p>
<p>Apr</p>
<p>May</p>
<p>June</p>
</div>

</div>

  <div class="flex-item-right">
  <div className="textMargin">
<p className="smaller">Revenue Sources</p>
<h2 className="bigger">$20K</h2>
<p className="smallerBlue">Last 6 Months</p>
</div>
    
<div style={{  marginTop: '30px' ,marginLeft: '-68px', marginBottom: '-60px', paddingBottom: '-80px', }}>
  <ChartContainer
     width={550}
     height={285}
      series={[{ data: uData2, label: 'uv', type: 'bar',  color: 'rgba(232, 237, 245, 1)',  }]}
      xAxis={[{ scaleType: 'band', data: xLabels2 }]}
      
    >
      <BarPlot />
    </ChartContainer>
    
  </div>
  <div className="months">
<p>Online Sales</p>
<p>In-Store Sales</p>

</div>
    
    </div>
   
</div>
</div>
</div>

      
      

       </>
    )
}
export default Reports