import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { SIGN_IN_URL, SIGN_UP_URL } from "../configueFireBase/configue";




// export const signInAction = createAsyncThunk(
//     "auth/signInAction",
//     async (stockInfo) => {
//         const response = await fetch(SIGN_IN_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(stockInfo)
//         })
        
//         if (!response.ok) {
//             throw new Error("Il y a eu un souci pour s'authentifier !")
//         }
        
//         const data = await response.json()
        
//         // Le retour d'un thunk sera ce qui peuplera à terme le action.payload
//         return data
//     }
//     )
    
//     export const signUpAction = createAsyncThunk(
        
//         "auth/signUpAction",
//         async (stockInfo) => {
//             console.log('je rentre dans mon sign up')
//             const response = await fetch(SIGN_UP_URL, {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(stockInfo)
//     })
    
//     if (!response.ok) {
//         throw new Error("Il y a eu un souci pour s'authentifier !")
//     }
//     console.log(response)
//     const data = await response.json()
    
//     return data
// }
// )

const authSlice = createSlice({
   
    name: "auth",
  initialState: {
      islogged : false,
      user: null,
      isLoading: false,
      error: null
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            AsyncStorage.setItem('token', action.payload.idToken)
        },
        removeUser(state) {
           
            state.user = null
            AsyncStorage.removeItem('token')
            state.islogged = false
            
        }
    },
//     extraReducers: (builder) => {
//         /*
//         Pour chaque action, il est possible de se brancher sur trois versions de l'action: 
//         - pending : L'action est en court et la réponse n'est pas encore arrivée
//         - rejected : L'action est finie suite à une erreur, elle n'est pas arrivé à terme, on aura l'erreur en 'action.payload'
//         - fullfilled: L'action s'est déroulée sans encombre, on aura le retour de notre action en 'action.payload'
//         */
//     builder.addCase(signInAction.pending, (state) => {
//         state.isLoading = true
//         state.user = null
//         state.error = null
//     })
    
//     builder.addCase(signInAction.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.user = action.payload
//         state.islogged = true
//     })

//     builder.addCase(signInAction.rejected, (state, action) => {
//       state.isLoading = false
//       state.error = action.payload
//     })

//     builder.addCase(signUpAction.pending, (state) => {
//       state.isLoading = true
//       state.user = null
//       state.error = null
//     })

//     builder.addCase(signUpAction.fulfilled, (state, action) => {
//       state.isLoading = false
//       state.user = action.payload
//       state.islogged = true
//     })

//     builder.addCase(signUpAction.rejected, (state, action) => {
//       state.isLoading = false
//       state.error = action.payload
//     })
//   }
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer