import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {useState,useEffect} from "react"
import { Image } from "@chakra-ui/react"
function Loading(){
  const router=useRouter()
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    const handleStart=(url:String)=>(url !==router.asPath) && setLoading(true)
    const handleComplete=(url:String)=> (url === router.asPath) && setTimeout(()=>(setLoading(false)))
   
    router.events.on('routeChangeStart',handleStart)
    router.events.on('routeChangeComplete',handleComplete)
    router.events.on("routeChangeError",handleComplete)
    

    return ()=>{
      router.events.off("routeChangeStart",handleStart)
      router.events.off('routeChangeComplete',handleComplete)
      router.events.off('routeChangeError',handleComplete)
    }
  })
  return loading && (
    <div className='spinner'>
     <Image src='https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif' alt='gif' />
    </div>
  )
}


export default function App({ Component, pageProps }: AppProps) {
  return ( <>
   {/* <Loading /> */}
    <ChakraProvider>
 <Component {...pageProps} />
  </ChakraProvider>
  </>
  )
}
