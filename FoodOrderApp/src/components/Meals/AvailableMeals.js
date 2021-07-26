import React, { useEffect, useState} from "react";

import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://test-1d005-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
        setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              title={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
