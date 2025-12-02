import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile({title}) {
  return (
  <>

  <h5 className='bg-primary text-center p-2 text-light my-4 '>{title}</h5>
  <div className="row p-1 bg-da">
    <div className="col-md-6 mb-3"><img src="../../assets/img/nouserimage.jpg" style={{height:400}} alt=""className='w-100' /></div>
    <div className="col-md-6 mb-3">

        <table className='table table-bordered table-striped table-hover'>
         <tbody>
               <tr>
                <th>Name</th>
                <td>Ajay kumar</td>
            </tr>
             <tr>
                <th>User</th>
                <td>Ajay</td>
            </tr> <tr>
                <th>Email</th>
                <td>ajay1234@gamil.com</td>
            </tr> <tr>
                <th>Phone</th>
                <td>+91-9076641016</td>
            </tr> <tr>
                <th>Role</th>
                <td>Super Admin</td>
            </tr> <tr>
                
                <td colSpan={2}>

                    <Link to="/update-profile" className="btn btn-primary w-100 " >Update Profile</Link>
                </td>
            </tr>
         </tbody>
        </table>
    </div>

  </div>
  </>
  )
}
