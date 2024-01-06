const videoModel = require('../models/videoSchema')
const courseModel = require('../models/courseSchema')

const { jwtDecode } = require("jwt-decode");

// This function for create new video
const createNewVideo = (req,res) => {
  const decoded = jwtDecode(req.headers.authorization)
  
  const {url ,order,courseId} = req.body;
   videoModel({
    url,
    order,
    createdBy : decoded.id,
    courseId,
  }).save()
  .then( async (video) => {
    try {
     
      const found = await courseModel.findByIdAndUpdate({ _id: courseId },  {$push: { video: video._id} })
      
     } catch (error) {
      res.status(404).json({
        success:false,
        message: "Error with coure schema",
        done: error
      })
     }
    res.status(200).json({
      success:true,
      message: "Video uploded successfuly",
      done: video
    })
  })
  .catch((err) => {
    res.status(404).json({
      success:false,
      message: "Server error",
      error: err
    })
  })
 
  //  courseModel.findOneAndUpdate({courseId:_id})({
  //   video:url
  //  })
  //  .save().then((result)=>{console.log(result)}).catch((err)=> {console.log(err);})
}

// This function get all video by course id
const getAllVideoByCourseId = async (req,res) => {  
  const id = req.params.id;
  try {
    const found = await videoModel.find({courseId:id})
    .populate("courseId")
    res.status(200).json({
      success:true,
      message: "All videos related to this course",
      result:found
    })
  } catch (error) {
    res.statue(404).json({
      success:false,
      message: "Server error",
      result:error
    })
  }

}


module.exports = {
  createNewVideo,
  getAllVideoByCourseId
}