import React from 'react'
import ImageUpload from '../../ImageUpload';
import RangeSlider from '../../range-slider';
import Model from '../../model';

const UploadImageForGenerationModal = ({ setUploadImageModal, uploadImageModal }) => {
    return (
        <Model
            open={uploadImageModal}
            onClose={() => setUploadImageModal(false)}
            maxWidth="xs"
            title="Upload Image"
        >
            <p className="upload-img-modal-title">
                Here you could upload any image
            </p>
            <ImageUpload />
            <p className="upload-img-modal-title">Transformation Strength</p>
            <p className="upload-img-modal-text">
                Change how strongly should an uploaded image affect the generated
                image.
            </p>
            <div className="home-range-slider">
                <RangeSlider />
            </div>
            <p className="upload-img-modal-text">
                0 = uploaded image has no effect
            </p>
            <p className="upload-img-modal-text">
                1 = the generated will be 100% based on uploaded image, instead of the
                prompt.
            </p>
        </Model>
    )
}

export default UploadImageForGenerationModal