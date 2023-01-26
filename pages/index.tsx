import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import PaymentGateway from './Pricing'
// import RequestQR from './RequestQR'
import QrConfirmed from './QRConfirmed'
// import QrMailed from './QRMailed'

const Home: NextPage = () => {

  // const [name, setName]=useState("");
  // const [email, setEmail]=useState("");
  // const [otp, setOtp]=useState("");
  // const [mmid, setMmid]=useState("");
  // const [value, setValue]=useState([]);
  // const item=[...value]
  // const handleNext=() =>{
  //   return(
  //   setValue(item[],{name:String},{email},{mmid});
  //   );

  // }


  return (
<>
    <div>
      <Head>
        <title>QuickDocs</title>
      </Head>
      {/* <p>Hello</p> */}
      {/* <ul>
      {value.map(item)=>{return <li>{item.name}{item.email}{item.mmid}</li>}}
      </ul> */}
      {/* <PaymentGateway /> */}
      {/* <RequestQR /> */}
      <QrConfirmed />
      {/* <QrMailed /> */}
    </div>
    </>


  )
}


export default Home
