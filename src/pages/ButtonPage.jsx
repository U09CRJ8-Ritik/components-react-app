import React from 'react';
import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'


const ButtonPage = () => {
    return (
        <div>
            <div>
                <Button className='mb-5' success onClick={() => console.log('button is clicked!')}>
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deals!
                </Button>
            </div>
            <div>
                <Button secondary>Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded>Bye Bye!</Button>
            </div>
        </div>
    )
}

export default ButtonPage
