import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faBell,faCartShopping,faDashboard,faFlag, faHeader, faMailBulk, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='navbar'>
      
      <div className='before-menu'>
        {/* <h1>MODESENS</h1> */}
        <img src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="" />
      </div>

      <div className='menu-bar'>
        <div className='women'>
        <Link to="/womens">WOMEN</Link>

         <div className='sub-menu-1'>
       
           <div>SHOPALL</div>
           <div>CLOTHING</div>
           <div>BAGS</div>
           <div>SHOES</div>
           <div>ACCESSORIES</div>
           <div>BEAUTY</div>
           <div>SALES</div>
           <div>PREOWNED</div> 

         </div>
        </div>
 <div className='men'>
 <Link to="/mens">MEN</Link>
 
    <div className='sub-menu-1'>
       
       <div>SHOPALL</div>
       <div>CLOTHING</div>
       <div>BAGS</div>
       <div>SHOES</div>
       <div>ACCESSORIES</div>
       <div>BEAUTY</div>
       <div>SALES</div>
       <div>PREOWNED</div> 

    </div>
 </div>
   <div className='beauty'>
   <Link to="/beauty">BEAUTY</Link>
    <div className='sub-menu-1'>
       
       <div>SHOPALL</div>
       <div>CLOTHING</div>
       <div>BAGS</div>
       <div>SHOES</div>
       <div>ACCESSORIES</div>
       <div>BEAUTY</div>
       <div>SALES</div>
       <div>PREOWNED</div> 

    </div>     
  </div>
    <div className='kids'>
    <Link to="https://modesens.com/designers/">KIDS</Link>
     <div className='sub-menu-1'>
       
       <div>SHOPALL</div>
       <div>CLOTHING
    

       </div>
       <div>BAGS </div>
       <div>SHOES</div>
       <div>ACCESSORIES</div>
       <div>BEAUTY</div>
       <div>SALES</div>
       <div>PREOWNED</div> 

    </div>       
  </div>
        <div className='kids'>
        <Link to="https://modesens.com/designers/">HOME</Link>
           <div className='sub-menu-5'>
           <div className='sub-menu-5-sub'>
              <div>
                <heading className="menu_heading">SHOP BY CATEGORIES</heading>
                <div>NEW ARRIVAL</div>
                <div>SHOP ALL</div>
                <div>BATH</div>
                <div>BED</div>
                <div>FURNITURE</div>
                <div>HOME DECOR</div>
                <div>KITCHENS & DINING</div>
                <div>PET ACCESSORIES</div>
              </div>
              <div>.
              <br />
                <div>TECHNOLOGY</div>
                <div>SALE</div>
              </div>
              <div>
                <Link to="https://modesens.com/designers/"><heading className="menu_heading">Designers</heading></Link>
             
                 <div>GUCCI</div>
                 <div>VERSACE</div>
                 <div>MASION MARGIELA</div>
                 <div>MASTER & AMP,DYNAMIC</div>
                 <div>HAY</div>
                 <div>VITRA</div>
                 <div>FORNASETTI</div>
              </div>
              <div>
                Here we ahave to add images
              </div>
             
           </div>
           </div>
        </div>
        <div className='designers'>DESIGNERS
        <div className='sub-menu-5'>
           <div className='sub-menu-5-sub'>
              <div>
                <heading className="menu_heading">SHOP BY CATEGORIES</heading>
                <div>NEW ARRIVAL</div>
                <div>SHOP ALL</div>
                <div>BATH</div>
                <div>BED</div>
                <div>FURNITURE</div>
                <div>HOME DECOR</div>
                <div>KITCHENS & DINING</div>
                <div>PET ACCESSORIES</div>
              </div>
              <div>.
              <br />
                <div>TECHNOLOGY</div>
                <div>SALE</div>
              </div>
              <div>
                 <heading className="menu_heading">Designers</heading>
                 <div>GUCCI</div>
                 <div>VERSACE</div>
                 <div>MASION MARGIELA</div>
                 <div>MASTER & AMP,DYNAMIC</div>
                 <div>HAY</div>
                 <div>VITRA</div>
                 <div>FORNASETTI</div>
              </div>
              <div>
                Here we ahave to add images
              </div>
             
           </div>
           </div>
        </div>
        <div className='community'>COMMUNITY
    <div className='sub-menu-1'>
       
       <div>SHOPALL</div>
       <div>CLOTHING</div>
       <div>BAGS</div>
       <div>SHOES</div>
       <div>ACCESSORIES</div>
       <div>BEAUTY</div>
       <div>SALES</div>
       <div>PREOWNED</div> 

    </div> 
        </div>
      <div className='sales'>SALES
        <div className='sub-menu-1'> 
       <div>SHOPALL</div>
       <div>CLOTHING</div>
       <div>BAGS</div>
       <div>SHOES</div>
       <div>ACCESSORIES</div>
       <div>BEAUTY</div>
       <div>SALES</div>
       <div>PREOWNED</div> 

    </div> </div>
        <div className='why-modesens'>WHY MODESENS
    <div className='sub-menu-1'>
       
       <div>SHOPALL</div>
       <div>CLOTHING</div>
       <div>BAGS</div>
       <div>SHOES</div>
       <div>ACCESSORIES</div>
       <div>BEAUTY</div>
       <div>SALES</div>
       <div>PREOWNED</div> 

    </div> 
        </div>
      </div>
      <div className='after-menu'>
        <p><FontAwesomeIcon icon={faFlag}/></p>
        <p><FontAwesomeIcon icon={faBell}/></p>
        <p><FontAwesomeIcon icon={faUser}/></p>
        <p><FontAwesomeIcon icon={faSearch}/> <span>SEARCH</span> </p>
        <Link to="./cart"><p><FontAwesomeIcon icon={faCartShopping}/></p></Link>
        <Link to="./admin"><p><FontAwesomeIcon icon={faA}/></p></Link>
        
  
      </div>

   </div>
   <hr />
   <br />
   <br />
 
    </div>
    
  )
}

export default Header
