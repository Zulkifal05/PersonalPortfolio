import React from 'react'
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"
import Linkedin from "../assets/Linkedin.png" 
import Github from "../assets/Github.png"

const Socials = () => {
  return (
    <div className='mt-13'>
        <h1 className='font-bold text-center text-green-500 text-4xl'>Accounts</h1>
        <div className='flex items-center justify-center pt-9 gap-5'>
            <a href="https://www.facebook.com/profile.php?id=100084611832311" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" className='h-13 rounded-lg'/></a>
            <a href="https://www.instagram.com/zulkifal828/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" className='h-13 rounded-lg'/></a>
            <a href="https://www.linkedin.com/in/syed-zulkifal-ali-shah-514b76338?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxWY%2FKb3CRg6W0jLPm%2BQUpA%3D%3D" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin" className='h-13 rounded-lg'/></a>
            <a href="https://github.com/Zulkifal05" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github" className='h-13 rounded-lg'/></a>
        </div>
    </div>
  )
}

export default Socials