import React, {useState, useEffect} from 'react'
import LoadingAnimation from '../components/LoadingAnimation';
import { useRouter } from 'next/router'

function Loading() {
    const router = useRouter();
    console.log()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('aa',router.pathname)
        const handleStart = (url) => (url !== router.pathname) && setLoading(true);
        console.log(handleStart)
        // handleComplete event was not firing
        const handleComplete = (url) => (url === router.pathname) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    
    return loading && (<div><h1>Loading...</h1></div>);
}

export default Loading