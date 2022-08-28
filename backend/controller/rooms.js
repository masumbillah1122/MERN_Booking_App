import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";



export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try {
        
        const savedRoom = await newRoom.save();

        try {
            //find hotel and add room 
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id }
            });
        } catch (error) {
            next(error);
        }

        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
}

//Update room
export const updateRoom = async(req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params._id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated");
  } catch (error) {
    next(error);
  }
}

//For get hotel by id
export const getRoom = async (req, res, next) => {
      try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
      } catch (error) {
       next(error);
      }
}

//For get  all hotels 
export const getAllRooms = async (req, res, next) => {
     try {
       const rooms = await Room.find();
       res.status(200).json(rooms);
     } catch (error) {
       next(error);
     }
}
