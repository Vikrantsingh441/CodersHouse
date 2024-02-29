import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import styles from './StepOtp.module.css'
import {verifyotp} from '../../../http/index'
import {useSelector, useDispatch} from 'react-redux'
import {setAuth} from '../../../store/authSlice'


const StepOtp = () => {
  const dispatch = useDispatch()
  const {phone,hash} = useSelector((state)=>(state.auth.otp))
  const [otp, setOtp] = useState("")
  async function submit(){
    try {
      const {data} = await verifyotp({otp,phone,hash})
      dispatch(setAuth({user:data.user}))
      // onNext()
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title={"Enter the code we just texted you !"} icon={"lock-emoji"}>
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div>
            <div className={styles.actionButtonWrap}>
              <Button text={"Next"} onClick={submit}></Button>
            </div>
            <p className={styles.bottomParagraph}>
              By entering your number, you're agreeing to our Terms of
              Service and Privacy Policy. Thanks!
            </p>
          </div>
        </Card>
      </div>
    </>
  )
}

export default StepOtp