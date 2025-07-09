import Search from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Filter, ResetTv } from '@mui/icons-material';
import Card from './Card';
import {dummyData} from '../utils/mockData';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

export const ButtonComponent = (text, icon, onClick) => {
    return (
        <Button variant="contained" color="secondary" startIcon={icon} onClick={onClick}>
            {text}
        </Button>
    )
}
let apiData = [];
//local state variable to hold the dummy data

const Body = () => {
    console.log("Body Rendered");
    
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // Simulating an API call to fetch data
        setTimeout(() => {
            // Assuming dummyData is an array of objects
            setData(dummyData);
        }, 1000);

        await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api")
        .then((apiData) => {
            apiData = apiData.json();
            console.log("API Data:", apiData);
            //setData(apiData);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setTimeout(() => {
                // Assuming dummyData is an array of objects
                setData(dummyData);
            }, 1000); // Handle error state here
        });
    }

    const filterClickHandler = () => {
        const filteredData = data.filter(
            (obj) => obj.rating > 4.5
        );
        setData(filteredData);
    }

    const resetClickHandler = () => {
        setData(dummyData);
        setSearchText("");
    }

    const searchClickHandler = () => {
        const filteredData = dummyData.filter((obj) =>
            obj.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setData(filteredData);
    }

    const NotiificationBar = () => {
        return (
            <div className='notiification-bar'>
                <div className='search-container'>
                    <input 
                        type='text' 
                        placeholder='Search...' 
                        className='search-input' 
                        value={searchText} 
                        onChange={(e) => 
                            setSearchText(e.target.value)
                        }
                    />
                    {ButtonComponent("Search", <Search />, searchClickHandler)}
                </div>
                <div className='filter-container'>
                    {ButtonComponent("Filter", <Filter />, filterClickHandler)}
                    {ButtonComponent("Reset", <ResetTv />, resetClickHandler)}
                </div>
            </div>
        )
    }

    return data.length === 0 ? <Shimmer /> :(
        <div className='body'>
            <div className='notiification-bar'>
                <div className='search-container'>
                    <input 
                        type='text' 
                        placeholder='Search...' 
                        className='search-input' 
                        value={searchText} 
                        onChange={(e) => 
                            setSearchText(e.target.value)
                        }
                    />
                    {ButtonComponent("Search", <Search />, searchClickHandler)}
                </div>
                <div className='filter-container'>
                    {ButtonComponent("Filter", <Filter />, filterClickHandler)}
                    {ButtonComponent("Reset", <ResetTv />, resetClickHandler)}
                </div>
            </div>
            <div className='card-container'>
                {
                    data.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;