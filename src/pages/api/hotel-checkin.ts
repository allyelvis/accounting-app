import type { NextApiRequest, NextApiResponse } from "next";

type CheckInData = {
  roomId: number;
  guestName: string;
  checkInDate: string;
  checkOutDate: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; message: string }>,
) {
  if (req.method === "POST") {
    try {
      const { roomId, guestName, checkInDate, checkOutDate } =
        req.body as CheckInData;

      if (!roomId || !guestName || !checkInDate || !checkOutDate) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid check-in data" });
      }

      // In a real application, you would update the room status in the database
      // and create a reservation record

      res.status(200).json({ success: true, message: "Check-in successful" });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Error during check-in" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end();
  }
}
