import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import useTelegram from '../../../hooks/telegram-hook';
import BounceLoader from '../../presentation/ui/bounce-loader/BounceLoader';

const Preview = () => {
  // const {tg} = useTelegram();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate('/sign-in');
    }, 3000);
}, [setLoading]);

  return (
    <div className={'preview'}> 
      <div className={'preview__container'}>
        {loading ? <BounceLoader/> : null}
      </div>
    </div>
  )
};

export default Preview;