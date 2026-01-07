import { useEffect, useState } from "react";
import RestaurentCards from "../../components/restaurentCards/page";
import { Link } from "react-router-dom";

const SwiggyDelhiRestaurents = () => {
    const [foodData, setFoodData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const[searchedData,setSearchedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://dummyjson.com/recipes");
            const data = await res.json();
            setFoodData(data?.recipes);
            setSearchedData(data?.recipes)
        };
        fetchData();
    }, []);

    const handleSearchInput = (e) => {
        setSearchText(e.target.value)
    }

    const searchFood = () => {
        const filteredDatas = searchedData?.filter((filterData) => 
            filterData.name.toLowerCase().includes(searchText.toLowerCase())
        )
      setFoodData(filteredDatas)
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-6">
            <div className="flex gap-4">
                <input className="border-2 p-2 rounded-xl" type="text" value={searchText} placeholder="Enter Restaurent Name " onChange={(e) => handleSearchInput(e)} />
                <button onClick={searchFood} className="border-2 rounded-xl p-2">Search</button>
            </div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Restaurants in Delhi
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodData.map((res) => (
                  <Link key={res.id} to={"/res-details/"+res.id}>  <RestaurentCards  res={res} /></Link>
                ))}
            </div>
        </div>
    );
};

export default SwiggyDelhiRestaurents;
