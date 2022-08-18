import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      (!email ||
        !email.includes("@") ||
        !name ||
        name.trim() === "" ||
        !message,
      message.trim() === "")
    ) {
      res.status(422).json({
        message: "Invalid input",
      });

      return;
    }

    const newMessage = {
      email,
      message,
      name,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://amanji:8917@cluster0.iz5yo.mongodb.net/blog?retryWrites=true&w=majority"
      );
    } catch (err) {
      res.status(500).json({
        message: "Could not connect to DB",
      });
      return;
    }

    const db = client.db("blog");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({
        message: "Somthing went wrong :(",
      });
      return;
    }

    client.close();

    res.status(201).json({
      status: "OK",
      message: newMessage,
    });
  }
};

export default handler;
