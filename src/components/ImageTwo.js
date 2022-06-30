import { Parallax } from 'react-parallax';
import Nasa1 from '../img/nasa1.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Nasa1} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne