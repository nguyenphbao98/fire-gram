import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import Uploadform from './comps/Uploadform';
import Modal from './comps/Modal';

function App() {

  const [selectedImage, setSelectedImage] = useState('')

  return (
    <div className="App">
      <Title />
      <Uploadform />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
