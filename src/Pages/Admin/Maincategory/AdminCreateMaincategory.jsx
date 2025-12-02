import React from 'react'
import Breadcrum from '../../../Component/Breadcrum'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

export default function AdminCreateMaincategory() {
  return (

    <>
    <Breadcrum title="Admin"/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 ">
                <Sidebar/>
            </div>
            <div className="col-md-9 ">
              <h5 className='bg-primary text-center text-light p-2 my-4 w-100'>Maincategoryfds <Link to="/admin/maincategory"><i className='fa fa-long-arrow-left text-light float-end'></i></Link></h5>
            </div>
        </div>
    </div>

    </>
  )
}
