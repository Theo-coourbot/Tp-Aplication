import AuthSlice from "./AuthSlice"



const { configureStore } = require("@reduxjs/toolkit")


const store = configureStore({
    reducer: {
      auth: AuthSlice,
  
    }
  })

  export default store