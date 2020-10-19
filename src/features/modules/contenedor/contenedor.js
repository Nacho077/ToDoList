import React from 'react';
import Input from "../input/input";
import Todos from "../ToDos/todos"

export default function Contenedor(){
    return(
        <div className="contenedor">
            <Input />
            <Todos />
        </div>
    )
}