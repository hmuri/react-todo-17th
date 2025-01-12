import React from 'react';
import DoneItem from './DoneItem';

const DoneList = ({dones, onRemove_dn, addTodoList}) =>{
    return (
        <div>
            {dones.map(done =>(
                <DoneItem done={done} key = {done.id} onRemove_dn = {onRemove_dn} addTodoList={addTodoList}/>
                // 아 뭔가 이렇게 이중으로 안 넘기고 바로 지우는 방법도 있을 것 같은데...
            ))}
        </div>
    );
}

export default DoneList;
