import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import AdminImg from "../Images/AdminImg.png";
import { Link } from "react-router-dom";
import "../CSS/AdminHomeStyle.css";


function AdminHomePage(){
    return(
        <>
        <Navigation></Navigation>
        <div className='ContainerAdminHome'>
            <div className='main1Admin'>
                <img src={AdminImg} alt="AdminImage" className="AdminImage"></img>
            </div>

            <div className='main2Admin'>
                <h2 className="HeadingAdmin"><b>YARL ICE CREAM <br/> Admin Panel</b></h2>
                <br />
                <div className="AdminNav">
                    <Link><button><b>Orders</b></button></Link>
                    <br/><br />
                    <Link><button><b>Add Items</b></button></Link>
                </div>
            </div>

        </div>
        <Footer></Footer>
        </>
    )
}

export default AdminHomePage;