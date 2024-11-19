const userModel = require("../models/user");
const petModel = require("../models/pets");
const { response } = require("express");
const finalModel = require("../models/final");
const nodemailer = require('nodemailer');
const create = async (req, res) => {
  try {
    const userDetails = new userModel(req.body);
    const { email } = userDetails;
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res.status(400).json({ message: "user already exists" });
    }
    const newUser = await userDetails.save();
    res.status(200).json(newUser);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};
const final = async (req, res) => {
  try {
    const userDetails = new finalModel(req.body);
    const { name,email,contact,Like } = userDetails;
    // const isExist = await finalModel.findOne({ email });
    
    const newUser = await userDetails.save();
    res.status(200).json(newUser);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};

const fetchPet = async (req, res) => {
  try {
    // const { name,age,breed,contact } = req.body;
    const user = await petModel.find();
    res.json(user);
    
      //return res.status(401).json({ message: "Invalid email or password" });
    
    //res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const search = async (req, res) => {
  try {
    // const { name,age,breed,contact } = req.body;
    const user = await userModel.find();
    res.json(user);
    
      //return res.status(401).json({ message: "Invalid email or password" });
    
    //res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const DeletePet = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you're passing the ID as a URL parameter
    const user = await petModel.findByIdAndDelete(id);
    
    if (!user) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.status(200).json({ message: "Pet deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// Define the `fetch` function using CommonJS syntax
const fetch = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// const createPet = async (req, res) => {
//   try {
//     const userDetails = new petModel(req.body);
//     // const { email } = userDetails;
//     // const isExist = await userModel.findOne({  });
//     // if (isExist) {
//     //   return res.status(400).json({ message: "user already exists" });
//     // }
//     const newUser = await userDetails.save();
//     res.status(200).json(newUser);
//   } catch {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
const createPet = async (req, res) => {
  try {
    const userDetails = new petModel(req.body);

    // Save the new pet to the database
    const newUser = await userDetails.save();

    // Set up the transporter for sending the email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service
      auth: {
        user: 'jeevajeevag123@gmail.com', // Your email address
        pass: 'rbnr lrge abvz tpxv',  // Your email password or app-specific password
      },
    });

    // Configure the email options
    const mailOptions = {
      from: 'jeevajeevag123@gmail.com', // Sender's email address
      to: req.body.email,           // Recipient's email address
      subject: 'Pet Creation Success',
      text: `Hello ${req.body.username},\n\nYour pet ${req.body.petname} has been successfully added to our database!`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with the newly created user details
    res.status(200).json(newUser);
  } catch (error) {
    console.error("Error creating pet or sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Export the functions using CommonJS syntax
module.exports = {
  create,
  fetch,
  fetchPet,
  createPet,
  final,
  search,
};