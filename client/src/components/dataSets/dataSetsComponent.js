import "./dataSetsComponent.css";
import { Button } from "@mui/material";

import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";


function DataSetsComponent(){


    return (
      <div>

     
        <div className="parentDiv" >
            <h1>My Data sets</h1>
            <div className="searchBar">
            <div className="customInput">
                <CiSearch className="grayIcon  searchIcon" size={24} />
                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search data sets" />
            </div>
        </div>


<div className="buttonPos">

<div className="buttonMargin">
<Button  variant="outlined" disableElevation>
  Import data set
</Button>
</div>

<div>
<Button variant="contained" disableElevation>
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
 </div>
    )
}

export default DataSetsComponent