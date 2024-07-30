import {useMemo} from 'react';

const openAlert = (arg) => useMemo(() => !!arg, [arg]);

export default openAlert;