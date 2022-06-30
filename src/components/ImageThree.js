import { Parallax } from 'react-parallax';
import Spacex from '../img/spacex.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Spacex} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne