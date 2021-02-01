import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import '../css/admin.css'
import { useSelector } from 'react-redux'

const Admin = ({history}) => {

    const userData = useSelector(state => state.authUser.userData);

    useEffect(
        () => {
            if(!userData){
                history.push('/admin/login');
            }
        }
    )

    return (
            <section id="admin">
            
                <div className="admin-panel-container">
                    <ul className="admin-ul">
                        <Link to='/admin/posts'><li>Posts <i class="fas fa-clipboard"></i></li></Link>
                        <Link to='/admin/users'><li>Users <i class="fas fa-users"></i></li></Link>
                    </ul>
                </div>
            </section>
)}

export default Admin
