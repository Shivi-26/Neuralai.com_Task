import React from 'react';
import Sidebar from './Sidebar';
export default function Admin(){
    return(
        <>
          <div className="container-fluid">
          <div className="row">
          <div className="col-3">
          <Sidebar/>
          </div><br/><br/>
          <div className="col-9">
          <h1 className="text-dark-blue mt-5">Hello,</h1>
          <h3 className="text-primary mt-2">We welcome you to Neuralmind</h3>
          <p className='mt-5'>In educational institutions such as schools or universities, the Admin may be responsible for overseeing academic programs, 
          ensuring compliance with regulations and accrediting bodies, managing student affairs, and maintaining relationships with alumni and donors.

Overall, the Admin plays a critical role in the success of an institution by providing strategic direction,
 ensuring effective management, and maintaining a positive and productive environment for staff, students, and 
 stakeholders.</p>
    <p className='mt-4'>In an institution, an Admin refers to an administrator, an individual or a group of individuals responsible 
      for managing and overseeing the day-to-day operations of the organization. The role of the administrator 
      can vary depending on the type and size of the institution, but generally, they are responsible for ensuring the 
      smooth functioning of the institution and for making decisions that align with the goals and objectives of the organization.

The responsibilities of an Admin can include managing budgets, hiring and supervising staff, 
implementing policies and procedures, coordinating and overseeing projects, maintaining records and data, and 
communicating with stakeholders such as faculty, students, parents, and community members.</p>
    </div>
  </div>
  </div>

        </>
    )
}