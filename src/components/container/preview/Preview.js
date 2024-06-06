import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import useTelegram from '../../../hooks/telegram-hook';
import BounceLoader from '../../presentation/ui/bounce-loader/BounceLoader';

const Preview = () => {
  // const {tg} = useTelegram();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    //   navigate('/sign-in');
    // }, 3000);
    // if (!!tg.ready() === true) {
    //   let path = window.location.pathname;
    //   let parts = path.split('/');
    //   if (storageService.getItem(tg.initDataUnsafe.user.id) && parts.length === 2) {
    //     return navigate('/crm');
    //   } else {
    //     return navigate('/sign-in');
    //   };
    // };
}, [setLoading, ]);

  return (
    <>
      {loading ? <BounceLoader className={'bounce--budget'}/> : null}
    {/* <BounceLoader className={'bounce--budget'}/> */}
    </>
  )
};

export default Preview;