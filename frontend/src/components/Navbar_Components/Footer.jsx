import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='footer_'>
                 <div className='footer_customer'>
                    
                    <heading>CUSTOMER CARE</heading>
                    <p>SHOPPER PROTECTION</p>
                    <p>Loyalty Program</p>
                    <p>Help Center</p>
                    <p>Size Guides</p>
                    <p>Contact Us / Feedback</p>
                    <p>Shipping / Returns</p>
                 </div>

                 <div className='footer_customer'>
            
                    <heading> INFORMATION</heading>
                    <p>SHOPPER PROTECTION</p>
                    <p>About Us</p>
                    <p>Influencer Program</p>
                    <p>Partner Stores</p>
                    <p>Sitemap</p>
                 </div>


<div className='footer_customer'>
            
            <heading> LEGAL</heading>
            <p>Terms Of Use</p>
            <p>Disclosure</p>
            <p>Privacy Policy</p>
            <p>Community Guidelines</p>
            <p></p>
         </div>
        

<div className='footer_customer'>
            <heading>  CONNECT WITH US</heading>
            <br /><br /><br />
            <div style={{display:"flex",gap:"10px"}}>
                <img src="https://cdn.modesens.com/static/img/20220815download_ios.svg" alt="" />
                <img src="https://cdn.modesens.com/static/img/20220815download_android.svg" alt="" />
                <img src="https://cdn.modesens.com/static/img/20220815down_chromestrore.svg" alt="" />
            </div>
         </div>

         <div className='footer_customer'>
            
            <heading>SHARE THE LOVE</heading>
            <p>Your friends will thank you - more than once</p>
           <input type="text" placeholder='Enter email addresses separated by commas
' />
            <button>Invite Friends</button>
            <div className='footer_top_images'>
            <img src="https://cdn.modesens.com/static/img/20221013top.svg" alt="" />
            </div> 
            <p></p>
         </div>
                
        </div>
        <br /><br />
          <p className='footer_p'>When you follow our links to visit a brand or retailer’s website or make a purchase, ModeSens may earn a commission.</p>
          <br />
        <hr />
        <br /><br /><br />
    </div>
  )
}

export default Footer
