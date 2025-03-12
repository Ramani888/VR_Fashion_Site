import React, { useState } from "react";
import "./UploadDialog.css";
import { serverOrderUnloading, serverUploadUnloadingImage, serverUploadUnloadingVideo } from "../../../services/serverApi";

const UploadDialog = ({ isOpen, onClose, orderId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [videofile, setVideoFile] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image")) {
        setImageFile(e.target.files[0]);
        setSelectedImage(URL.createObjectURL(file));
      } else if (file.type.startsWith("video")) {
        setVideoFile(e.target.files[0]);
        setSelectedVideo(URL.createObjectURL(file));
      }
    }
  };

  const handleSubmit = async () => {
    try {
      setUploading(true);
      const rawData = {
        orderId: orderId,
      };
      if (selectedImage) {
        const formData = new FormData();
        formData.append('image', imageFile);
        for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
        }
        const res = await serverUploadUnloadingImage(formData);
        console.log('res', res);
        // await handleUploadImage();
        rawData.imageUrl = res?.imageUrl;
      }

      if (selectedVideo) {
        const formData = new FormData();
        formData.append('video', videofile)
        const res = await serverUploadUnloadingVideo(formData);
        console.log('res', res)
        // await handleUploadVideo();
        rawData.videoUrl = res?.videoUrl;
      }

      await serverOrderUnloading(rawData);
      setUploading(false);
      onClose();

    } catch (error) {
      console.error("Upload Error:", error);
      setUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="popup-header">
          <h2>Upload Image/Video</h2>
        </div>

        <div className="popup-body">
          <input type="file" accept="image/*,video/*" onChange={handleFileChange} style={{background: '#ffffff', border: '1px solid black', borderRadius: '4px'}} />

          <div className="preview-container">
            {selectedImage && (
              <img src={selectedImage} alt="Selected" className="preview-media" />
            )}
            {selectedVideo && (
              <video src={selectedVideo} controls className="preview-media"></video>
            )}
            {!selectedImage && !selectedVideo && <p>Please select an image or video</p>}
          </div>

          <div className="button-container">
            <button className="cancel-button" onClick={onClose}>Cancel</button>
            <button className="submit-button" onClick={handleSubmit}>{uploading ? 'Loading...' : 'Submit'}</button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default UploadDialog;