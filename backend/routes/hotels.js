import express from "express";
import { createHotel, getHotel, getAllHotels, byType, byCity, getHotelsRoom } from "../controller/hotels.js";
import { isAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//For add new rooms, only admin can add a new hotels
router.post("/new", isAdmin, createHotel);

//for get hotel by id
router.get("/find/:id", getHotel);

//For get all hotels
router.get("/", getAllHotels);
router.get("/bycity", byCity);
router.get("/bytype", byType);
router.get("/room/:id", getHotelsRoom);

export default router;
