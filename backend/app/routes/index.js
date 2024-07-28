import routes from "./user-routes.js"

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/polkadot',routes);
}