import "./dataSetsComponent.css";
import {Button} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import {BsThreeDots} from "react-icons/bs";
import SideNav from "../sideNav/sideNavComponent";
import {Link} from "react-router-dom";
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


function DataSetsComponent({onNewDataClick}) {

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(232, 237, 245, 1)',
        borderRadius: '10px'
    }));

    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        backgroundColor: 'rgba(232, 237, 245, 1)',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: 'rgba(232, 237, 245, 1)',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {},
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({

        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,

            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '90ch',

            },
        },
    }));

    return (
        <>

            <div className="parent-div">
                <SideNav/>

                <div className="padding-left">
                    <h1 className="">My Data sets</h1>


                    <div className="input-container">


                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search data sets"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    </div>

                    <div className="buttonPos">

                        <div className="buttonMargin ">

                            <Button variant="outlined" disableElevation className="custom-button-gray">
                                Import data set
                            </Button>
                        </div>

                        <div>
                            <Link to="/myAccount/dataSets/createDataset">
                                <Button variant="contained" disableElevation className="custom-button-blue">

                                    Create new data set


                                </Button>
                            </Link>
                        </div>

                    </div>

                    <h2>Your data sets</h2>

                    <div className="dotsFlex">
                        <div>users</div>
                        <BsThreeDots className="right-align"/>
                    </div>

                    <div className="dotsFlex">
                        <div>payments</div>
                        <BsThreeDots/>
                    </div>

                    <div className="dotsFlex">
                        <div>orders</div>
                        <BsThreeDots/>
                    </div>

                    <div className="dotsFlex">
                        <div>sessions</div>
                        <BsThreeDots/>
                    </div>

                    <div className="dotsFlex">
                        <div>products</div>
                        <BsThreeDots/>
                    </div>

                    <div className="dotsFlex">
                        <div>customers</div>
                        <BsThreeDots/>
                    </div>

                    <div className="dotsFlex">
                        <div>ab tests</div>
                        <BsThreeDots/>
                    </div>


                </div>

            </div>
        </>

    )
}


export default DataSetsComponent
