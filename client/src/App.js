import React from 'react';
import { IonApp, IonRouterOutlet, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Login_smart from './containers/login_container';
import { Landing } from './components/landing';
import SignUp from './components/signup';
import { Dashboard } from './containers/Dashboard';
import AuthComponent from './containers/AuthComponent';
import './app.css'

export class App extends React.Component {
  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonPage>
            <IonRouterOutlet>
              <Route exact path="/" component={Landing} />
              {/* <Route exact path="/login" component={Login_smart} />
              <Route exact path="/signup" component={SignUp} />
              <AuthComponent>
                <Route exact path="/dashboard" component={Dashboard} />
              </AuthComponent> */}
            </IonRouterOutlet>
          </IonPage>
        </IonReactRouter>
      </IonApp>
    );
  }
}
