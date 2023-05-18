
import { useTimer } from 'react-timer-hook';

const OfferSection = () => {
    const time = new Date();
    time.setHours(time.getHours() + 2);
    const expiryTimestamp = time;
    
    const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div>
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h1>15% Discount on all Sports Car Toys</h1>
                    <p>Offer Expires On</p>
                    <div style={{ fontSize: '100px' }}>
                        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;