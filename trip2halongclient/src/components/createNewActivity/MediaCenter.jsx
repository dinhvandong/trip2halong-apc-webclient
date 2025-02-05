import React, { useState } from 'react'
import { File, FileVideo, Trash2, Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";
import Ba from './photo.json';



const MediaCenter = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videoURL, setVideoURL] = useState("");
    const [images, setImages] = useState([]);

    const onDrop = (acceptedFiles) => {
        const newImages = acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
        );
        setImages([...images, ...newImages]);
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };


    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/png, image/jpeg, image/jpg",
        multiple: true,
    });


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };
    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedVideo(file);
            setVideoURL(URL.createObjectURL(file)); // Tạo URL để xem trước video
        }
    };


    return (
        <div className='w-full h-auto p-3 bg-white'>
            <div className='w-full h-auto bg-[#F9F9F9] flex flex-col p-4 rounded-md'>
                <p className='text-2xl font-bold'>Media Center</p>
                <label className='flex flex-col mt-3'>
                    <p className='text-[15px] ml-4 text-black font-medium'>Itinerary<span className='text-red-500'>*</span></p>
                    <p style={{ fontStyle: "italic" }} className='text-[13px] ml-4 text-gray-400 mt-2'>Please type your package name. Your pakage name is no lohger than 10 words </p>
                </label>
                <div className="flex items-center gap-2 mt-3">
                    <button className="flex items-center justify-between p-2 w-full h-[40px] text-gray-400 bg-white rounded-md ">
                        {selectedFile ? selectedFile.name : "Please update your docx"}
                        <label htmlFor="fileInput" className="cursor-pointer">
                            <File className="w-4 h-4 text-gray-600" />
                        </label>
                    </button>
                    <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
                <div>
                    <label className='flex flex-col mt-3'>
                        <p className='text-[15px] ml-4 text-black font-medium'>Video Gallery<span className='text-red-500'>*</span></p>
                        <p style={{ fontStyle: "italic" }} className='text-[13px] ml-4 text-gray-400 mt-2'>Please type your package name. Your pakage name is no lohger than 10 words<br />
                            Businesses must confirm that hold they the nghts to any
                        </p>
                    </label>
                    <div className="flex flex-col items-center gap-4 mt-3">
                        <button className="flex items-center justify-between p-2 w-full h-[40px] text-gray-400 bg-white rounded-md">
                            {selectedVideo ? selectedVideo.name : "Please update one 1 video"}
                            <label htmlFor="videoInput" className="cursor-pointer">
                                <FileVideo className="w-4 h-4 text-gray-600" />
                            </label>
                        </button>

                        <input
                            id="videoInput"
                            type="file"
                            className="hidden"
                            accept="video/*"
                            onChange={handleVideoChange}
                        />
                        {videoURL && (
                            <video controls className="w-64 rounded-lg shadow-lg">
                                <source src={videoURL} type={selectedVideo?.type} />
                                Trình duyệt của bạn không hỗ trợ phát video.
                            </video>
                        )}
                    </div>
                </div>
                <div className='flex flex-col w-full h-auto mt-3'>
                    <p className='text-[15px] ml-4 text-black font-medium'>Photo Gallery <span className='text-red-500'>*</span></p>
                    <div className='flex flex-row w-full h-auto mt-3 space-x-3'>
                        {Ba.map((item) => (
                            <div key={item} className='h-auto rounded-md'>
                                <img src={item.imgdd} alt={item.id} className='rounded-md'></img>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontStyle: "italic" }} className='text-[13px] ml-4 text-black mt-2'>You can update a maximum of <span className='font-bold'>30 photo</span>. Each photo Should not excerd 5MB. Only <span className='font-bold'>PNG,JPG & JPEG</span> formats are accepted<br />
                        Busseneet must confrim that they hold the nights the submit fro update on the platorm. if a third
                    </p>
                </div>
                <div className="w-full h-auto mt-3 rounded-lg">
                    <p className='text-[15px] ml-4 text-black font-medium'>Banner Photo<span className='text-red-500'>*</span></p>
                    <div className="flex flex-row w-full h-auto mt-3 space-x-3">
                        {images.map((file, index) => (
                            <div key={index} className="relative h-auto rounded-md">
                                <img
                                    src={file.preview}
                                    alt="uploaded"
                                    className="object-cover w-full h-auto rounded-lg"
                                />
                                <button
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute p-1 text-white transition bg-red-500 rounded-full opacity-0 top-2 right-2 group-hover:opacity-100"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                        <div
                            {...getRootProps()}
                            className="flex items-center justify-center w-1/4 h-auto text-center bg-white border-2 border-dashed rounded-lg cursor-pointer "
                        >
                            <input {...getInputProps()} />
                            <p>Update Your Photo</p>
                        </div>

                    </div>
                    <p style={{ fontStyle: "italic" }} className='text-[13px] ml-4 text-black mt-2'>You can update a maximum of <span className='font-bold'>30 photo</span>. Each photo Should not excerd 5MB. Only <span className='font-bold'>PNG,JPG & JPEG</span> formats are accepted<br />
                        Busseneet must confrim that they hold the nights the submit fro update on the platorm. if a third
                    </p>             
                </div>


            </div>
        </div>
    )
}

export default MediaCenter
