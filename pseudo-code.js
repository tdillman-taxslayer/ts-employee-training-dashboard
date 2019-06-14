import {route} from 'preact-router';
import {isLoggedIn} from '../services/auth';
const PrivateRoute = ({component: Component, location, ...rest}) => {
    if (!isLoggedIn() && typeof window !== 'undefined' && window.location.pathname !== `/login`) {
        // If the user is not logged in, redirect to the login page.
        route('/login', true);
        return null;
    }
    return <Component {...location} {...rest} />;
};
export default PrivateRoute;



 render() {
        return (
            <div id="app">
                <Header/>
                <Router onChange={this.handleRoute}>
                    <PrivateRoute path="/" firebase={firebase} component={Home}/>
                    <PrivateRoute path="/city/:city_id" firebase={firebase} component={CityDetails}/>
                    <PrivateRoute path="/city/:city_id/truck/:truck_id" firebase={firebase} component={TruckDetail}/>
                    <PrivateRoute path="/maintenance" firebase={firebase} component={Maintenance}/>
                    <PrivateRoute path="/messages" firebase={firebase} component={Messages}/>
                    <PrivateRoute path="/checkins" firebase={firebase} component={Checkins}/>
                    <Login path="/login" firebase={firebase} />
                </Router>
            </div>
        );
    }