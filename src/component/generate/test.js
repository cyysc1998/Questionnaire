import React from 'react';
import CheckBox from '../display/CheckBox'
import SingleBox from '../display/SingleBox'
import TextBox from '../display/TextBox'
import RateBox from '../display/RateBox'
import DigitBox from '../display/DigitBox'
import GSingleBox from './GSingleBox'

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
                <SingleBox data = {single}/>
                <br/>
                <CheckBox data = {check}/>
                <br/>
                <TextBox data={text}/>
                <br/>
                <RateBox data = {ra}/>
                <br/> 
                <DigitBox data = {data}/>
                <GSingleBox/>
            </div>
        )
    }
}
