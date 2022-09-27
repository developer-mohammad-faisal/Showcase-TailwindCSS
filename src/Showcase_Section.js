import React, { Fragment } from "react";
import navbar from "./assets/images/navbar.png";
import shopify from "./assets/images/shopify.png";
import small_logo from "./assets/images/small_logo.png";
import logo from "./assets/images/logo.png";
import stroke from "./assets/images/stroke.png";
import '../src/custom_style/showcase_style.css'

const Showcase_Section = () => {
  return (
    <Fragment>
      <section className="mx-w-[1440px] mx-auto overflow-x-hidden bg-[#FFFFFF]">
        {/* Navbar */}

        <div className="mx-auto">
        <div className="mt-[21px] ml-[76px] ms-[1152.32px] ">
          <img
            className="w-[211.68px] h-[45px]"
            src={navbar}
            alt="navbar"
          />
        </div>

        <div className="w-[1440px] border mb-[40px] mt-[24.99px]" ></div>
        </div>

        {/* Showcase */}

    
          <div className="w-[698px] mx-auto" >
            
          <h1 className="text-[#0F1419] text-center mx-auto text-[34px] font-bold leading-[46px] font-sans w-[680px] h-[46px]">
              Welcome to Showcase 👋
            </h1>
            <p className="text-[#0F1419] font-sans text-center mx-auto font-normal text-[18px] leading-[30px] w-[566.41px] h-[70px]">
              Create an account and start showcasing your <br /> products to a global
              audience looking for new things!
            </p>
          
    

        <div className=" mt-[42.59px] mb-[225.41px]">
          <div className="w-[698px] rounded-[34px] border bg-[#FFFFFF] box_shadow">

       <div className="flex justify-center items-baseline">

          <div className="w-[34px] h-[34px] ml-[82px] mr-[18px] mt-[35.41px] bg-[#357DF9] rounded-full flex justify-center items-center">
              <span className=" w-[6px] h-[18px] text-[16px] font-medium not-italic font-sans leading-[18px] text-white"> 1 </span>
            </div> 

            <div className="w-[98.09px] h-[6px] top-[351.5px] left-[503px] rounded-[48px] bg-[#357DF9]" ></div>

            <div className="w-[34px] h-[34px] top-[338px] left-[619.09px]  mx-[18px] bg-[#357DF9] rounded-full flex justify-center items-center">
              <span className=" w-[6px] h-[18px] text-[16px] font-medium not-italic font-sans leading-[18px] text-white"> 2 </span>
            </div> 

            <div className=" w-[98.09px] h-[6px] top-[351.5px] left-[671.09px] rounded-[40px] bg-[#EFF0F7] " >
            <div className="w-[49.04px] h-[6px] top-[351.5px] left-[671.09px] rounded-[40px]  bg-[#357DF9]" ></div>
            </div>

            <div className="w-[34px] h-[34px] top-[338px] left-[619.09px]  mx-[18px] bg-[#EFF0F7] rounded-full flex justify-center items-center">
              <span className=" w-[6px] h-[18px] text-[16px] font-medium not-italic font-sans leading-[18px] text-[#7A7C8B]"> 3 </span>
            </div>

            <div className=" w-[98.09px] h-[6px] top-[351.5px] left-[671.09px] rounded-[40px] bg-[#EFF0F7] " ></div>

            <div className="w-[34px] h-[34px] top-[338px] left-[619.09px] ml-[18px] mr-[77.73px] bg-[#EFF0F7] rounded-full flex justify-center items-center">
              <span className=" w-[6px] h-[18px] text-[16px] font-medium not-italic font-sans leading-[18px] text-[#7A7C8B]"> 4 </span>
            </div>
         </div>

            <div className="w-[596.26px] mt-[99.41px] mx-[50.74px] border " ></div>

            <div   className="ml-[46px] mt-[53px] ms-[524.56px] ">
              <img src={shopify} alt="shopify" />
            </div>
  
              <p className="w-[441px] h-[30px] ml-[46.26px] mr-[204.74px] mt-[13.93px] text-[18px] font-sans font-normal leading-[30px] text-[#7A7C8B] " >Authorizing the connection your Shopify store:</p>

              <div className="flex justify-center items-center gap-x-[34px] w-[284px] h-[66px] logo_shadow rounded-[6px] border mx-auto mt-[34.91px] ">
                <h4 className="text-[#7A7C8B] text-[18px] font-sans leading-[20px] w-[150px] " >Install Showcase</h4>
                <img className="my-[13px]" src={small_logo} alt="small_logo" />
              </div>


              <div className="flex justify-center mt-[137px] items-center">
                <img className="mb-[87.59px] w-[56.96px] h-[61px] " src={logo} alt="logo" />
                <img className="mx-[35.42px] mb-[103px]" src={stroke} alt="stroke" />
                <img className="mb-[103px]" src={stroke} alt="stroke" />
                <img className="mx-[35.42px] mb-[103px]" src={stroke} alt="stroke" />
                <img className="mb-[98.43px] w-[137.44px] h-[39.15px]" src={shopify} alt="shopify" />
              </div>

          </div>
        </div>
          </div>

 
           <div className="w-[698px] mx-auto flex justify-between items-center mb-[151px]">
            <h3 className="w-[268px] h-[24px] font-sans text-[16px] leading-[24px] text-[#0F1419] " >Already have an account? <span className="text-[#357DF9] underline " >Sign in</span></h3>
             <button className="w-[167px] h-[50px] rounded-[6px]  bg-[#357DF9] text-[#FFFFFF] text-center text-[18px] leading-[20px] font-bold font-sans " >Next step</button>
           </div>

      </section>
    </Fragment>
  );
};

export default Showcase_Section;
