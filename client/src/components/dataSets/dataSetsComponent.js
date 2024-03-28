import "./dataSetsComponent.css";
import { Button } from "@mui/material";

import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";


function DataSetsComponent({ onNewDataClick }){

  const handleCreateNewData = ()  => {
    onNewDataClick("CreateData")
  }

    return (

     
      <div className="padding-left">
      <h1 className="">My Data sets</h1>
              
                <div className="input-container"> 
                  <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search data sets" />
                  </div>

                  <div className="buttonPos">

<div className="buttonMargin ">
<Button   variant="outlined" disableElevation className="custom-button-gray">
  Import data set
</Button>
</div>

<div>
<Button onClick={handleCreateNewData}  variant="contained" disableElevation className="custom-button-blue">
  Create new data set
</Button>
</div>
   
</div>

<h2>Your data sets</h2>

<div className="dotsFlex">
  <div>users</div>
  <BsThreeDots className="right-align" />
</div>

<div className="dotsFlex"> 
<div>payments</div>
<BsThreeDots />
</div>

<div className="dotsFlex"> 
<div>orders</div>
<BsThreeDots />
</div>

<div className="dotsFlex"> 
<div>sessions</div>
<BsThreeDots />
</div>

<div className="dotsFlex"> 
<div>products</div>
<BsThreeDots />
</div>

<div className="dotsFlex"> 
<div>customers</div>
<BsThreeDots />
</div>

<div className="dotsFlex"> 
<div>ab tests</div>
<BsThreeDots />
</div>
 </div>
      
          
    )
}



export default DataSetsComponent