import React from 'react';
import CheckBox from './CheckBox'
import SingleBox from './SingleBox'
import TextBox from './TextBox'
import RateBox from './RateBox'
import DigitBox from './DigitBox'

export default class Test extends React.Component{
    render() {
        const single={
            id: 1,
            intro: 'danxyan',
            choices: [
                '士大夫士大夫大师傅',
                '士大夫士大夫大师傅',
                '士大夫士大夫大师傅',
                '士大夫士大夫大师傅',
            ]
        }
        const check = {
            id: 2,
            intro: 'danxyan',
            choices: [
                '士大夫士大夫大师傅',
                '士大夫士大夫大师傅',
                '士大夫士大夫大师傅',
                '士大夫士大夫大师傅',
            ]
        }
        const text = {
            id: 3,
            intro:'wenben'
        }
        const ra = {
            id: 4,
            count: 7
        }
        const data = {
            id: 1,
            intro: '测试',
            type: 0,
            step: 1,
            precision: 1,
            max: 100,
            min: 0
        }
        return(
            <div style={{textAlign:'center'}}>
                {/* <SingleBox data = {single}/>
                <br/>
                <CheckBox data = {check}/>
                <br/>
                <TextBox data={text}/>
                <br/>
                <RateBox data = {ra}/>
                <br/> */}
                <DigitBox data = {data}/>
            </div>
        )
    }
}
