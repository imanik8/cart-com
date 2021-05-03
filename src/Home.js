import React from 'react'
import styled from 'styled-components';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useHistory, Redirect, Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import RestaurantCardInfo from "./RestaurantCardInfo";


function Home() {
    return (
        <>
            <AppBar
                variant="outlined"
                style={{ border: "none", zIndex: "999", transition: "0.3s linear",maxHeight:"70px",minHeight:"70px" }}
                position="fixed" backgroundColor= "white" color= "black" >
            
                <Toolbar>
                    <IconButton
                        style={{ marginLeft: "10%",fontWeight: "1000", fontSize: "27px", outline:"none"}} edge="start" color="inherit" aria-label="menu" marginRight= "theme.spacing(2)">
                        <img width="122px" height="28px" alt="" src='/assets/images/logo.png'/>
                    </IconButton>
                    <IconButton color="black" aria-label="add to shopping cart" style={{marginLeft:"46%", outline:"none"}}>
                        <ShoppingCartOutlinedIcon fontSize="large" style={{position:"relative",color:"black"}}/><span style={{position:"absolute",left:"30px",top:"5px",backgroundColor:"#ff2e56",color:"white",width:"18px",height:"18px",fontWeight:"bolder",cursor:"pointer",borderRadius:"50%",padding:"1px",fontSize:"12px", outline:"none"}}></span>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div style={{ background: "rgb(247, 253, 250)" }} paddingTop = "5%">
                <div style={{width:"75%",margin:"auto",margingTop:'50px'}}>
                    <Breadcrumbs separator="-›" aria-label="breadcrumb" style={{marginTop:"30px"}}>
                        <Link style={{color: "rgb(0, 179, 122)", opacity: 1,fontWeight: 600,fontSize: 12,fontFamily: "sans-serif",}}to="/">
                            Home
                        </Link>
                        <Link style={{color: "rgb(0, 179, 122)",opacity: 1,fontWeight: 600,fontSize: 12,fontFamily: "sans-serif",}} to="/">
                            Bangalore
                        </Link>
                        <Typography style={{opacity: 1, fontWeight: 600, fontSize: 12, fontFamily: "sans-serif",}} color="inherit">
                            Food Delivery
                        </Typography>
                    </Breadcrumbs>
                    <Box style={{border: "none",width: "100%",paddingBottom:"5%", background: "rgb(247, 253, 250)",}}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Box style={{border: "none",width: "88px", marginTop: "30px",height: "88px",borderRadius: "16px",textAlign: "center",padding: "5px",background: "rgba(0, 210, 144, 0.08)",}}>
                                <img style={{height: "44px", width: "44px", alignContent: "center", marginTop: "15px", }} src="/assets/images/restaurantlist.png"alt="logo"/> 
                            </Box>
                            <Box style={{border: "none",margin: "10px",marginTop: "60px",lineHeight: "normal",letterSpacing: "normal",fontFamily: "sans-serif",}}>
                                <p style={{fontSize: "28px",color: "black",textAlign:"left",letterSpacing: "normal",fontWeight: "700",lineHeight: "0",fontFamily: "sans-serif",}}>Order from Restaurants</p>
                                <p style={{fontSize: "18px", fontWeight: 600, opacity: "0.6", textAlign: "left", fontFamily: "sans-serif",}}> Restaurants </p>
                            </Box>
                        </div>
                    </Box>
                </div>
            </div><br/>
            <RestaurantCardInfo />
            </>
    )
}

export default Home

const Container = styled.div``

