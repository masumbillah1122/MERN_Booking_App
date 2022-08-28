import express from "express";
import { createRoom, getAllRooms, getRoom, updateRoom } from "../controller/rooms.js";
import { isAdmin } from './../utils/verifyToken.js';

const router = express.Router();

//For add new rooms, only admin can add a new room
router.post("/:hotelId", isAdmin, createRoom); //Only also admin login can you add hotels

//Update Room
router.put("/availability/:id", updateRoom)

router.get("/:id", getRoom);

router.get("/", getAllRooms);

export default router;
