
import { useEffect, useState } from "react" 
import MealItem from "./MealItem"

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const getMeals = async () => {
            const res = await fetch("http://localhost:3001/meals");
            const data = await res.json();
            setMeals(data);
            return data;
        }
        getMeals()
    }, [])

    return (
        <ul id="meals">
            { 
                meals.map((meal) => (
                    <MealItem meal={meal} key={meal.id} />
                ))
            }
        </ul>
    )
}

export default Meals