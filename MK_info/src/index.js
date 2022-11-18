import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider} from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
    <Auth0Provider 
            domain = "dev-h6u42yajkce5gul6.us.auth0.com" 
            clientId = "SZh5v07D79SBFnkOekixTjqoafjSpxEh" 
            redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>
    , 
    document.getElementById('root')
);
