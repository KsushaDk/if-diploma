// import React from 'react'
// import { Route, Redirect } from 'react-router-dom'

// import { useSelector } from 'react-redux'

// const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => {
//   const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)

//   if (isAuthenticated) {
//     return <Redirect to="/books" />
//   }

//   return (
//     <Route
//       {...rest}
//       render={(props) => (
//         <Layout {...props}>
//           <Component {...props} />
//         </Layout>
//       )}
//     />
//   )
// }

// export default RouteWrapper
