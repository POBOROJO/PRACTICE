import express from "express";
const app = express();
import cors from "cors";
app.use(cors());

// Array of sample messages
const messages = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu felis nec neque commodo ultricies at vitae lectus. Lorem 20",
  "Proin luctus ante et sapien tempor, ac hendrerit nisi convallis. Donec non nunc id urna dapibus ultrices. Lorem 20",
  "Vivamus eget metus id nisi placerat ultricies. Sed nec felis tristique, consequat quam eget, tristique nulla. Lorem 20",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam faucibus, justo in dapibus suscipit, nulla erat facilisis lorem, vel tristique lacus velit vel enim. Lorem 20",
  "Quisque eu justo eget metus pretium mattis. Sed id est a dolor fermentum commodo. Curabitur at libero ac tellus lobortis tincidunt. Lorem 20",
  "Integer non lorem ut velit tincidunt varius eget at justo. Fusce interdum nisi a efficitur vestibulum. Nam ac sapien vehicula, tincidunt nisl in, tristique est. Lorem 20",
  "Aliquam erat volutpat. Nullam efficitur quam et libero fringilla, eget ullamcorper purus vulputate. Vivamus accumsan eros sit amet turpis dictum convallis. Lorem 20",
  "Mauris sollicitudin nunc ac libero tempus efficitur. Phasellus viverra libero non dui gravida fringilla. Donec ullamcorper ligula non felis posuere consequat. Lorem 20",
];

// Route to get a random message
app.get('/message', (req, res) => {
  // Generate a random index to select a message from the array
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  
  // Send the random message as the response
  res.json({ message: randomMessage });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
