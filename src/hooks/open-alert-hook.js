import {useMemo} from 'react';

const openAlert = (arg) => useMemo(() => {
    console.log(!!arg, 'arg')
    return !!arg
}, [arg]);

export default openAlert;