import React, {useEffect} from 'react';
import useTelegram from '../../../hooks/telegram-hook';
import BounceLoader from '../../presentation/ui/bounce-loader/BounceLoader';

const Preview = () => {
  const {tg} = useTelegram();
  
  useEffect(() => {
    if (!!tg.ready()) {
      let path = window.location.pathname;
      let parts = path.split('/');
      if (storageService.getItem('authToken') && parts.length === 2) return navigate('/sign-in');
    };
}, [tg]);

  return (
    <>
      {!!tg.ready() ? <BounceLoader className={'bounce--budget'}/> : null}
    {/* <BounceLoader className={'bounce--budget'}/> */}
    </>
  )
};

export default Preview;