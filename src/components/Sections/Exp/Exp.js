import React, { Component } from 'react';
import { Container, Row} from 'react-grid-system';
import ExpCard from './ExpCard';
import Header from '../Header';
import acind from '../../../assets/images/exp/ActionCIND.svg'
import mfest from '../../../assets/images/exp/MuslimFest.svg'
import mlse from '../../../assets/images/exp/MLSE.svg'
import bliss from '../../../assets/images/exp/Bliss.svg'


class Exp extends Component {
    render() {
        return (
        <section id='experience'>
          <Header text = "Experience"/>
          <Container>
             <Row>
            <ExpCard img = {mlse} company = "MAPLE LEAF SPORTS" title = "DATA SCIENTIST" date = "MAY 2019 - AUG 2019" extra_classes = "mlse"
            desc = "Developed Big-Data algorithmns and Deep-Learning models for Toronto FC & Toronto Raptors"
            techData = {["Python","Keras","Azure","Flask", "Pyspark"]}
            detail = {
              <p>
                Maple Leaf Sports & Entertainment Ltd. (MLSE) is Canada’s preeminent leader in delivering top quality sport and entertainment experiences to fans and is the parent company of the NHL’s Toronto Maple Leafs, the NBA’s Toronto Raptors MLS’s Toronto FC, the CFL’s Toronto Argonauts. MLSE recently ranked #1 Best Workplace in 2019 by LinkedIn. <br/><br/>

As a Data Scientist for Toronto FC and the Toronto Raptors, I specialized in opposition analysis and tactical scouting. Much of my work was done in Python, creating data pipelines, working with Flask backend servers and most presently building and training Big Data ML models. Some other tools I used include PySpark, MySQL, Azure, D3.js and more. My main projects involved creating big data processing pipelines, robust data algorithms for labelling, a Flask API for data visualization, a Keras model for predicting player performance and rookie potential for scouting and a Big Data CNN-LSTM for dynamic play prediction and classification.
              </p>
            }/>
            <ExpCard img = {bliss} company = "THE BLISS COMPANY" title = "FULL STACK DEVELOPER" date = "MAY 2019 - AUG 2019" extra_classes = "bliss"
            desc = "Built progressive web app, Treat, for herbal medicine pickup, rewards and more"
            techData = {["React","RxJS","Firebase"]}
            detail = {<p>
              The Bliss Company is a Toronto-based startup that looks to revolutionize the herbal medicine and cannabis landscape with technology. Their primary product, Treat, is an herbal product purchase and pick-up app that offers rewards and a convent point-of-sales for stores and dispensaries along with the value of user-data.
              <br/><br/>
              As a Full Stack Developer, I worked on several fundamental components of the progressive web-app. I developed the app’s  user-token authentication and data storage with MongoDB, Firebase and Redis in the backend.  I also completed much of the frontend design and interaction using React, Redux and RxJS in both TypeScript and JavaScript. Similarly, I integrated several necessary APIs such as Algolia for product searches and MapBox. Finally, I was able to prototype a Flask micro-server used for data-collection and customer trend analytics that would benefit dispensaries.
            </p>}/>
            <ExpCard img = {acind} company = "ACTION CIND" title = "WEB DEVELOPER" date = "MAY 2016 - AUG 2018" extra_classes = "actioncind"
            desc = "Maintained charity website and implemented donations and mail subscriptions"
            techData = {["Node","Flask","HTML"]}
            detail = {
              <p>
                Action CIND is a national non-profit that aims to raise awareness and support the over 2 million Canadians suffering of lesser known neurological diseases, myalgic encephalomyelitis, multiple chemical sensitivity and fibromyalgia. The charity has hosted several events, webinars and workshops both locally and internationally o help raise funds for research and advocate on behalf of victims who suffer silently with these illnesses.
                <br/><br/>
                I was recruited by Action CIND since its incarnation and have played a key role in their brand image and web development team, moving into leadership and team lead roles recently. Most recently, I led a team of 8 designers and developers across the country to redevelop the charity website  in <strong> HTML, CSS and JavaScript</strong> from an audience aware design perspective, maximizing accessibility. I personally developed many of the API involved components of the website including the <strong> MailChimp </strong> email-subscription forms and the donation flow using PayPal API. I also managed their Graphic Design team, helping uphold brand image and creating content for social media and events. 
              </p>
            }/>
            <ExpCard img = {mfest} company = "FESTIVE CURRENTS" title = "MULTI-MEDIA DEVELOPER" date = "MAY 2017 - AUG 2018" extra_classes = "festivecurrents"
            desc = "Redeveloped website and built interactive-online kids games"
            techData = {["Node","JS","HTML"]}
            detail = {
              <p>
                Festive Currents organizes some of Canada’s largest national festivals and events and is based in Mississauga, Ontario. The organization promotes equality, diversity and opportunity for all, in its goals to celebrate the Canadian mosaic.  <br/><br/>
                As a multi-media developer I spent lots of time redeveloping the festival website using<strong> HTML, CSS, JavaScript and jQuery</strong>, redeveloping the UI to create a more immersive website. I also was tasked with designing games for festivals themselves. I created several kids games such as Simon Says, Bingo, Checkers and more. I accomplished this using Node and Socket.io or Flask and OpenCV for a full-real time and immersive game experience.
              </p>
            }/>
           </Row>
          </Container>
          </section>
        );
    }
}

export default Exp;
