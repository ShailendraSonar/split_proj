import React from 'react';
import { IonHeader, IonContent, IonButton, IonImg, IonPage } from '@ionic/react';
// import { IonHeader, IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import '../styles/landing.css';
import Header from './Header';
import Logo from '../images/logo.png';

export const Landing = () => {
    console.log("landing page");
    
    return (

        <IonPage className="landing">
            <IonHeader>
                <Header />
            </IonHeader>
            <IonContent>
                <div className="landing-heading">
                    <IonImg align="middle" className="landing-logo" src={Logo} alt="Logo" />
                    <h1 className="landing-header">Split expenses with friends.</h1>
                    <p className="landing-desc">
                        <strong>Share</strong> bills and IOUs. <strong>Make sure</strong> everyone gets paid back. <strong>Totally free</strong> for web.
                    </p>
                    <IonImg className="landing-big" src={require('../images/dsiplay.png')} alt="Display" />
                </div>

                <div className="landing-feature">
                    <div>
                        <IonImg className="landing-img" src={require('../images/splitwise.png')} alt="Splitwise Feature" />
                    </div>
                    <div className="landing-content">
                        <h1>Splitting expenses has</h1>
                        <h1>never been easier.</h1>
                        <ul>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;Share bills and IOUs,</li>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;Make sure everyone gets paid back</li>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;Totally Free for web, iPhone, and Android.</li>
                        </ul>

                        <a href="/signup">
                            <IonButton className="landing-button">Get Started</IonButton>
                        </a>
                    </div>
                </div>
                
                {/* Debugging content */}
                <h2>Debugging Section</h2>
                <p>This is a test paragraph to check rendering.</p>
            </IonContent>
        </IonPage>
       

    );
};


 