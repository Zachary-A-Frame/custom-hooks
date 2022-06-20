import { useState } from 'react'
import uuid from "uuid";
import axios from "axios";

const useAxios = (url, name = "") => {
    const [cards, setCards] = useState([]);
    const addCard = async () => {
        const response = await axios.get(url + name);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard]
}

export default useAxios