
import './PrefferredAirports.css'
import LogoBack from '../../Components/LogoBack'
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';

const PrefferredAirports = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
    const handleContinue = () => {
        navigate('/accommadations');
    };

    return (
        <div>
            <div className='airports-back-steps-container'>
                <LogoBack onClick={handleBack} />
                <div className='airports-step-text'>Step 1 of 2</div>
            </div>

            <div className='airports-container'>
                <div className='airports-left-side'>

                    <h1 className='airports-add-preferences'>Add Your Airport<br />Preferences</h1>
                    <p className='airports-subtitle'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />xxxxxxxxxxxxxxxxxxxx</p>

                    <div className='airports-search-container'>
                        <input type='text' placeholder='Seach here' className='airports-search-input' />
                    </div>


                    <div className='airports-search-box'>
                        <img src="/src/assets/Cross.png" alt="CrossIcon" className='airports-cross-icon' />
                        <span className='airports-search-box-text'>KHI - Karachi</span>
                    </div>


                    <Button onClick={handleContinue}  className='airports-continue-button'>Continue</Button>

                </div>

                <div className='airports-right-side'>
                    <img src="/src/assets/PreferredAirpot.png" alt="PreferredAirpot" className='airports-prefferred-image' />
                </div>
            </div>
        </div>
    )
}

export default PrefferredAirports