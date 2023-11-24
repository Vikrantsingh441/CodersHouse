import React, { useState } from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card/Card'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'

const Phone = ({onNext}) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  return (
    <>
      <Card title={"Enter your phone number !"} icon={"phone"}>
        <TextInput value={phoneNumber} onchange={(e) => setPhoneNumber(e.target.value)} />
        <div>
          <div className={styles.actionButtonWrap}>
            <Button onClick={onNext} text={"Next"}></Button>
          </div>
          <p className={styles.bottomParagraph}>
            By entering your number, you're agreeing to our Terms of
            Service and Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
    </>
  )
}

export default Phone