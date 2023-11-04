import React, { useState } from "react";
import { Button } from '@material-ui/core';
import { initializeApp, getApps } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "your apiKey",
    authDomain: "your authDomain",
    projectId: "your projectId",
    storageBucket: "your storageBucket",
    messagingSenderId: "your messagingSenderId",
    appId: "your appId",
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

function UploadImages() {
    const [currentFile, setCurrentFile] = useState(undefined);
    const [imageURL, setImageURL] = useState("");

    const selectFile = (event) => {
        setCurrentFile(event.target.files[0]);
    };

    const upload = () => {
        const storage = getStorage();
        const storageRef = ref(storage, `images/${currentFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, currentFile);

        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                getDownloadURL(storageRef).then(url => {
                    setImageURL(url);
                });
            }
        );
    };

    return (
        <div className="mg20">
            <label htmlFor="btn-upload">
                <input
                    id="btn-upload"
                    name="btn-upload"
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    onChange={selectFile} />
                <Button
                    className="btn-choose"
                    variant="outlined"
                    component="span" >
                    Choose Image
                </Button>
            </label>
            <div className="file-name">
                {currentFile ? currentFile.name : null}
            </div>
            <Button
                className="btn-upload"
                color="primary"
                variant="contained"
                component="span"
                disabled={!currentFile}
                onClick={upload}>
                Upload
            </Button>

            {imageURL && (
                <div>
                    <img className="preview" src={imageURL} alt="" />
                </div>
            )}
        </div>
    );
}

export default UploadImages;
