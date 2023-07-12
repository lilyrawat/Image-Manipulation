const axios = require("axios");
const sharp = require("sharp");
const isUrl = require("is-url");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { url, width, height, top, left, crop, bw, format } = req.query;

    //Valid URL is required
    if (!url || !isUrl(url)) {
      res.status(400).json({ message: "Valid URL is required." });
    }

    //To check if Width, height, top and left are valid numbers or not.
    if (
      (width && (isNaN(width) || width < 0)) ||
      (height && (isNaN(height) || height < 0)) ||
      (top && (isNaN(top) || top < 0)) ||
      (left && (isNaN(left) || left < 0))
    ) {
      return res
        .status(400)
        .json({ error: "Width, height, top, left must be valid numbers." });
    }

    //Storing the URL in buffer
    const imageResponse = await axios({
      url: url,
      responseType: "arraybuffer",
    });

    const buffer = Buffer.from(imageResponse.data, "binary");
    let src = new sharp(buffer);

    //To Crop the Image
    if (crop) {
      if (!width || !height || !top || !left) {
        res.status(400).json({
          message: "Width, height, left, top values are required for cropping.",
        });
      } else {
        await src.extract({
          width: parseInt(width),
          height: parseInt(height),
          left: parseInt(left),
          top: parseInt(top),
        });
      }
    } else if (width && height) {
      await src.resize({ width: parseInt(width), height: parseInt(height) });
    } else if (width) {
      await src.resize({ width: parseInt(width) });
    } else if (height) {
      await src.resize({ height: parseInt(height) });
    }

    //To Convert the image into black and white
    if (bw) {
      await src.grayscale();
    }

    //To Format the image
    if (format) {
      await src.toFormat(format);
    }

    // Generate the manipulated image
    // const manipulatedImage = await src.toBuffer();
    // res.set("Content-Type", `image/${format}`);
    // res.send(manipulatedImage);

    //To save file
    await src.toFile("images/edited-image.jpeg");

    res.download("images/edited-image.jpeg");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Issues encountered during the image manipulation process.",
    });
  }
});

module.exports = router;
