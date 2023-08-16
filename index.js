const { exec } = require("child_process");

function synthesizeFirstFrame(videoPath, frameTime, imagePath) {
  const command = `ffmpeg -i ${videoPath} -ss ${frameTime} -vframes 1 ${imagePath}`;

  exec(command, (error, _, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    }
    if (stderr) {
      console.error(`ffmpeg stderr: ${stderr}`);
    }
    console.log("First frame synthesized successfully");
  });
}

synthesizeFirstFrame("html-course.mp4", "00:00:01", "result.jpg");
