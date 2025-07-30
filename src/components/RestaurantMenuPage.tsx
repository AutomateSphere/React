import { useEffect } from "react";

const RestaurantMenuPage = () => {

  useEffect(() => {
    fetchMenu();
    console.log("RestaurantMenuPage Rendered");
  }, []);

  const fetchMenu = async (): Promise<void> => {
        try {
            const response = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api");
            //const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=10575&catalog_qa=undefined&submitAction=ENTER");
            const apiData = await response.json();
            console.log("API Data:", apiData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

  return (
    <div className="menu">
      <h1>Name of Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Dish 1</li>
        <li>Dish 2</li>
        <li>Dish 3</li>
      </ul>
    </div>
  );
}

export default RestaurantMenuPage;