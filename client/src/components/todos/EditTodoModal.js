import React, {useState, useEffect} from 'react'
import UserSelectOptions from '../users/UserSelectOptions'
import { connect} from 'react-redux'
import PropTypes from 'prop-types'
 import M from 'materialize-css/dist/js/materialize.min.js';
import {updateTodo} from '../../actions/todo'

 
  const EditTodoModal = ({current, updateTodo}) => {
   const [message, setMessage] = useState('');
   const [attention, setAttention] = useState(false)
   const [user, setUser] = useState('');

   useEffect(() => {
     if(current) {
       setMessage(current.message);
       setAttention(current.attention);
       setUser(current.user);
     }
   },[current])

    const onSubmit = () => {
     if(message === '' || user === '') {
       M.toast({html: 'Please enter a todo and user'})
     } else {
       const updTodo = {
         id: current.id,
         message,
         attention,
         user,
         date: new Date()
       }

       updateTodo(updTodo);
       M.toast({html: `Todo updated by ${user}`})

      setMessage('');
      setUser('');
      setAttention(false)
     }}

    return (
     <div id='edit-todo-modal' className="modal" style={modalStyle}>
       <div className="modal-content">
         <h4>Enter Todo</h4>
         <div className="row">
           <div className="input-field">
             <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)}/>
             
           </div>
         </div>

          <div className="row">
           <div className="input-field">
             <select name="user" value={user} className="browser-default" onChange={e => setUser(e.target.value )}>
               <option value="" disabled>Select User</option>
               <UserSelectOptions/>
             </select>
           </div>
         </div>

          <div className="row">
           <div className="input-field">
             <p>
               <label>
                 <input 
                 type="checkbox" 
                 className="filled-in" 
                 checked={attention} 
                 value={attention} 
                 onChange={e => setAttention(!attention)}
                 />
                 <span>Needs Attention</span>
               </label>
             </p>
           </div>
         </div>
       </div>
       <div className="modal-footer">
         <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
       </div>
     </div>
   )
 }

  const modalStyle = {
   width: '75%',
   height: '75%'
 };

 EditTodoModal.propTypes = {
   current: PropTypes.object,
   updateTodo: PropTypes.func.isRequired,
 }

 const mapStateToProps = state => ({
   current: state.todo.current
 })

 
  export default connect(mapStateToProps, {updateTodo})(EditTodoModal)