import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (myFile) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        // reference

        const storageRef = projectStorage.ref(myFile.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(myFile).on('state_changed', 
            (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            }, 
            (err) => setError(err),
            async () => {
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                collectionRef.add({
                    url,
                    createdAt
                })
                setUrl(url)
            }
        );
    }, [myFile])


    return { progress, url, error}
}

export default useStorage;