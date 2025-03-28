import React, { useState } from 'react'

const FormInputs = () => { // 50
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if(selectedFile) {
      setFile(selectedFile);
    }
  }

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const uploadFile = event.dataTransfer.files[0];
    if(uploadFile) {
      setFile(uploadFile);
    }
  }

  return (
    <div className='mt-3 mb-3 flex flex-col items-center justify-center w-96 mx-auto'>
        <h1 className='mb-3'>Drag File Input</h1>
        <label
          htmlFor=''
          className={`w-full border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all
            ${dragging ?
            "border-red-500 bg-amber-300"
            :
            "border-gray-500"}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={(e) => setDragging(false)}
          onDrop={handleDrop}
        >
            <input type='file' name='' id='' placeholder='' className='hidden'
              onChange={handleFileSelect}
            />
            <p>
                Drag & Drop you file or {" "}
                <span className='text-blue-500'>Click to upload</span>
            </p>
        </label>
        { file && (
          <p className='mt-3 text-green-700'>Selected file : {file.name}</p>
        )}
    </div>
  )
}

export default FormInputs