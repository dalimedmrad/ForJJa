import React from 'react';
import "./home.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      margin:"auto 0!important",
      backgroundColor:"rgb(29, 28, 28)",
    },
    heading: {
        textAlign:theme.typography.textAlign="center",
      fontSize: theme.typography.pxToRem(28),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
const Home = () => {
    const classes = useStyles();

    return (
        <div className="bod">
            <div class="containera">
                <div class="carousel">
                    <div class="carousel__face"><span className="spana">To our site</span></div>
                    <div class="carousel__face"><span className="spana">" The whole</span></div>
                    <div class="carousel__face"><span className="spana">of </span></div>
                    <div class="carousel__face"><span className="spana">life </span></div>
                    <div class="carousel__face"><span className="spana">is just</span></div>
                    <div class="carousel__face"><span className="spana">like </span></div>
                    <div class="carousel__face"><span className="spana">watching </span></div>
                    <div class="carousel__face"><span className="spana">a film. "</span></div>
                    <div class="carousel__face"><span className="spana">Welcome</span></div>
                </div>
            </div>
           <div className="ya1"></div>
           
            <div className="child">
                <img src="bg1.jpg"/>
                    <h1 className="spn">Unlimited movies, TV series <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and more.</h1>
                    <h4 className="spn1">Where you are. Cancel anytime.</h4>
                
            </div>
            <div className="ya1"></div>
            <div className="ya2">
                <div style={{borderRadius:"25px"}} className="satal1">
                    <h1 className="hash" style={{paddingTop:"50px"}}>Watch ForJJa <br/>on your TV.</h1>
                    <p className='hash1'>Watch ForJJa on your Smart TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div style={{borderRadius:"25px"}} className="satal2">
                    <img src='tv.png'/>
                </div>
            </div> 
            <div className="ya1"></div>
            <div className="subs">
                <h1 className='fr'>Frequently Asked Questions</h1>
                <Accordion className="sb">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                    >
                    <Typography className="sb2" className={classes.heading}>
                        ForJJa, what is it?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="sb3">
                        ForJJa is a streaming service that offers a huge selection of award-winning TV shows, movies, animes, documentaries, and other programs on thousands of internet-connected devices.

                        Watch whatever you want, when you want, ad-free and at a very attractive monthly price. Discover new movies and TV series every week, there is something for everyone!
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="sb">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon  style={{ color: "white" }}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>
                        How much does ForJJa cost?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Watch ForJJa on your smartphone, tablet, smart TV, computer or streaming device, all for a fixed monthly fee. Plans range from US $ 7.99 to US $ 11.99 per month. No contract or additional costs.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="sb">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                        Where can I watch ForJJa?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    ForJJa is where you want, when you want. Sign in to your account to watch ForJJa online at ForJJa.com from your computer or any internet-connected device with the ForJJa app, such as smart TVs, smartphones, tablets, streaming players, and game consoles.

                    You can also download your favorite series with the iOS, Android or Windows 10 app. Download titles to watch them on your mobile device, even without an Internet connection. Take ForJJa with you wherever you go.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="sb">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                        How can I cancel my plan?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        ForJJa offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="sb">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                        What can I watch on ForJJa?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        ForJJa offers an extensive catalog including award-winning feature films, documentaries, TV series, anime and original ForJJa shows. Watch ForJJa whenever you want, whenever you want.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="sb">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                        Is ForJJa suitable for children?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        ForJJa Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.

                        Les profils Enfants comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>  
            <div className="ya1"></div>
            <footer>
            <div class="container-fluid mt-5">
                <div class="carda">
                    <div class="row" style={{fontSize:"10px;"}}>
                        <div class="col-md-6 col-sm-6 mt-2 col-xs-6">
                            <div class="pull-left">
                                <p><i class="fa fa-copyright"></i> 2021°</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <div class="pull-right mr-4 d-flex policy">
                                <div>Terms of Use</div>
                                <div>Privacy Policy</div>
                                <div>Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </footer>       
        </div>
    )
}

export default Home;
