import React from 'react'
import { Card } from '../card/card-component'
import './card-list.style.css'


export const CardList = props => (
     <div className = 'card-list'>
        {
            props.monstars.map(monstar => 
            <Card key = {monstar.id} monstar = {monstar}/>
          )
        }
    </div>
)