const express = require("express");
const cors = require("cors");
const { getCompliment, getFortuneCookie, postZodiacSigns, postFavoriteQoute, deleteFavoriteQoute, getSortingHouse } = require('./controller')

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortuneCookie);

app.post("/api/zodiac", postZodiacSigns);

app.post('/api/quote', postFavoriteQoute);
app.delete('/api/quote', deleteFavoriteQoute);

app.get("/api/house", getSortingHouse);

app.listen(4000, () => console.log("Server running on 4000"));
