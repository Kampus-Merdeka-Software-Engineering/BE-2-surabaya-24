const { Book, Booking } = require("../models");

async function createBooking(req, res) {
  try {
    const {
      book_id,
      check_in,
      check_out,
      name,
      email,
      total_room,
      no_hp,
      room_id,
    } = req.body;

    // const book = await Book.findByPk(book_id);
    // if (!book) {
    //   return res
    //     .status(404)
    //     .json({ code: 404, status: "Not Found", message: "Book not found" });
    // }

    const booking = await Booking.create({
      book_id: book_id,
      check_in: check_in,
      check_out: check_out,
      name: name,
      email: email,
      total_room: total_room,
      no_hp: no_hp,
      room_id: room_id,
    });

    // Update status buku menjadi 'booked' atau sesuai kebutuhan
    // await book.update({ status: "booked" });

    // Berikan respons
    const response = {
      code: 201,
      status: "Created",
      data: booking,
    };

    return res.status(response.code).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      message: "An error occurred while processing your request",
    });
  }
}

module.exports = {
  createBooking,
};
