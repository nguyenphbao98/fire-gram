import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const Uploadform = () => {
    const [myFile, setMyFile] = useState('');
    const [error, setError] = useState('');

    const handleOnChange = (e) => {
        let selectFile = e.target.files[0];
        
        const type = ['image/png','img/jpeg','img/jpg']

        if(selectFile && type.includes(selectFile.type)){
            setMyFile(selectFile);
            setError('');
        }else{
            setMyFile('');
            setError('Please select an image file (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={handleOnChange} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}

                { myFile && <div>{ myFile.name }</div> }

                { myFile && <ProgressBar file={myFile} setFile={setMyFile} /> }
            </div>
        </form>
    )
}

export default Uploadform;
