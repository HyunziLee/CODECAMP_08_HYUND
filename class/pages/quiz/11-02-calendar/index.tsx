import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import React from 'react';
import { useState } from 'react';




export default function(){
  const [date, setDate] = useState()
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    let a = dateString.split('-')
    console.log(a[1]);
  setDate(a[1])
};


  return(
    <Space direction="vertical">
      <DatePicker onChange={onChange}></DatePicker>
      <div>{date}</div>
      {/* <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" /> */}
  </Space>
  )
}