import React from 'react';

const Form = ({setInputText,todos,setTodos,inputText,setStatus,filtered}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler =(e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text:inputText, completed:false, id: Math.random()*1000}
        ])
        setInputText('')
    }

    const statusHandler = (e) =>{
        setStatus(e.target.value)
        console.log(e)
    }

    return(
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input'/>
                <button type='submit' className='todo-button' onClick={submitTodoHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className='select'>
                    <select name='filter' onChange={statusHandler} className='filter-todo'>
                        <option  value='all' >All</option>
                        <option value='completed' >Completed</option>
                        <option value='uncompleted' >Uncompleted </option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form;