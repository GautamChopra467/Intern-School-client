import React, { useState,useEffect } from 'react';
import "../../../components/company/css/UserCompany/ApplicantsCompanyStyles.css";
import { Link } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";

const HiredApplicants = ({hiredCandidates}) => {

  const [showapplied,setShowApplied] = useState(hiredCandidates)

      //  const showApplicants = async()=>{

      //       const {data} = await  axios.get(process.env.REACT_APP_SERVER_URL + `company/application/${iid}`)
      //         setShowApplied(data.candidates)
      //         setTotalApplied(data.length)

      //  }

  useEffect(()=>{
    setShowApplied(hiredCandidates)
},[hiredCandidates])



  return (
    <div className='hiredapplicants_box_applicantscompany'>
     {
  showapplied.map((application)=>(
    (application.internshipstatus === "Hired"?(
      <div className={application.status === undefined ? "student_box_applicantscompany":(application.status === true?application.class:application.class)} key={application.id}>
      <div className='top_section_student_applicantscompany'>
        <h2>{application.name}</h2>
        <Link target="_blank" to={`/resume/${application.id}`}>
        <div className='search_icon_container_applicantscompany'>
          <AiOutlineFileSearch className="search_icon_applicantscompany" />
        </div>
        </Link>
      </div>
      <div className='mid_section_applicantscompany'>
      <p>Hired</p>
      {/* <div className='mid_top_section_applicantscompany'>
            <div>
              <input type="radio" id={`accept${application.id}`} name={`${application.id}`} onClick={()=>changeAccepted(application.id)} value={`accept${application.id}`} />
              <label htmlFor={`accept${application.id}`}></label>
              <p>Hire</p>
            </div>
            <div>
              <input type="radio" id={`reject${application.id}`} name={`${application.id}`} onClick={()=>changeRejected(application.id)} value={`reject${application.id}`} disabled={(application.status === undefined)?false:(application.status === true)?true:false}/>
              <label htmlFor={`reject${application.id}`}></label>
              <p>Reject</p>
            </div>
          </div> */}
      </div>       
  </div>
    ):"")
  ))
   }

   {/* <div className='delete_box_applicantscompany' onClick={deleteRejectedApplicant}>
  <FaTrashAlt className="delete_icon_applicantscompany" />
           <p>Delete Rejected Ones  ({count})</p>
    </div>    */}
     </div>
  )
}

export default HiredApplicants
