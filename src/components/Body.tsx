import Search from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Filter, ResetTv } from '@mui/icons-material';
import Card from './Card';
import {dummyData, Restaurant} from '../utils/mockData';
import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

interface BodyComponentProps {
    text: string;
    icon: React.ReactNode;
    onClick: () => void;
}

export const ButtonComponent = ({ text, icon, onClick }: BodyComponentProps) => {
    return (
        <Button variant="contained" color="secondary" startIcon={icon} onClick={onClick}>
            {text}
        </Button>
    )
}
let apiData: any = [];
//local state variable to hold the dummy data

const Body: React.FC = () => {
    console.log("Body Rendered");

    const [data, setData] = useState<Restaurant[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (): Promise<void> => {
        // Simulating an API call to fetch data
        setTimeout(() => {
            // Assuming dummyData is an array of objects
            setData(dummyData);
        }, 1000);
       
        try {
            const response = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api");
            const apiData = await response.json();
            console.log("API Data:", apiData);
            setData(apiData);
        } catch (error) {
            console.error("Error fetching data:", error);
            setTimeout(() => {
                // Assuming dummyData is an array of objects
                setData(dummyData);
            }, 1000);
        }
    }

    const filterClickHandler = (): void => {
        const filteredData = data.filter(
            (obj: Restaurant) => obj.rating > 4.5
        );
        setData(filteredData);
    }

    const resetClickHandler = (): void => {
        setData(dummyData);
        setSearchText("");
    }

    const searchClickHandler = (): void => {
        const filteredData = dummyData.filter((obj: Restaurant) =>
            obj.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setData(filteredData);
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                            setSearchText(e.target.value)
                        }
                    />
                    <ButtonComponent
                        text="Search"
                        icon={<Search />}
                        onClick={searchClickHandler}
                    />
                </div>
                <div className='filter-container'>
                    <ButtonComponent
                        text="Filter"
                        icon={<Filter />}
                        onClick={filterClickHandler}
                    />
                    <ButtonComponent
                        text="Reset"
                        icon={<ResetTv />}
                        onClick={resetClickHandler}
                    />
                </div>
            </div>
            <div className='card-container'>
                {
                    Array.isArray(data) && data.length > 0 ? (
                        data.map((item: Restaurant) => (
                            <Card key={item.id} dummyData={item} />
                        ))
                    ) : (
                        <div>No data available</div>
                    )
                }
            </div>
        </div>
    )
}

export default Body;