// import React, { ReactComponentElement } from 'react';
// import {
//   RouteProps as ReactRouterProps,
//   Route as ReactRoute,
//   Redirect,
// } from 'react-router-dom';

// // import { useAuth } from '../hooks/auth';

// interface RouteProps extends ReactRouterProps {
//   isPrivate?: boolean;
//   component: React.ComponentType;
// }

// const Route: React.FC<RouteProps> = ({
//   isPrivate = false,
//   component: Component,
//   ...rest
// }) => {
//   // const { user } = useAuth();

//   return (
//     <ReactRoute
//       {...rest}
//       render={() => {
//         return isPrivate === !!user ? (
//           <Component />
//         ) : (
//           <Redirect to={{ pathname: isPrivate ? '/login' : '/dashboard' }} />
//         );
//       }}
//     />
//   );
// };

// export default Route;
