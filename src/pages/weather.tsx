import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function getWeather() {
  let [city, setCity] = useState("");

  const handleChange = (event: any) => {
    setCity(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleClick = (event: any) => {
    event.preventDefault();

    // Call API
    console.log("handleClick 👉️", city);
  };

  return (
    <div>
      <Input placeholder="Rechercher une ville" value={city} onChange={handleChange} />
      <Button onClick={handleClick} colorScheme="teal" variant="solid">
        Rechercher
      </Button>
    </div>
  );
}