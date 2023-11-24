import React from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card/Card'

const Phone = () => {
  return (
    <>
        <Card title={"Enter your phone number !"} icon={"phone"}>
      <div>
        <Button text={"Next"}></Button>
      </div>
    </Card>
    </>
  )
}

export default Phone