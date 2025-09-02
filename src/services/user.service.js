import axiosInstance from "./url.service";


export const sendOtp=async(phoneNumber,phoneSuffix,email)=>{
   try{
        const response=await axiosInstance.post("/auth/sendOtp",{
            phoneNumber,
            phoneSuffix,
            email
        })
        return response.data
   }catch(e){
    throw e.response?e.response.data:"Something went wrong while sending otp"
   }
}

export const verfyOtp=async(phoneNumber,phoneSuffix,otp)=>{
    try{
         const response=await axiosInstance.post("/auth/verifyOtp",{
             phoneNumber,
             phoneSuffix,
             otp
         })
         return response.data
    }catch(e){
     throw e.response?e.response.data:"Something went wrong while sending otp"
    }
}

export const updateUserProfile=async(data)=>{
    try{
         const response=await axiosInstance.post("/auth/updateProfile",data)
         return response.data
    }catch(e){
     throw e.response?e.response.data:"Something went wrong while sending otp"
    }
}

export const checkUserAuth=async()=>{
    try{
         const response=await axiosInstance.get("/auth/check-auth")
         if(response.data.status==="success"){
            return {isAuthenticated:true,user:response?.data?.user}
         }else if(response.data.status==="error"){
            return {isAuthenticated:false}
         }
        
    }catch(e){
     throw e.response?e.response.data:"Something went wrong while sending otp"
    }
}

export const logoutUser=async()=>{
    try{
        const response=await axiosInstance.get("/auth/logout")
        return response.data
    }catch(error){
        throw error.response?error.response.data:"Something went wrong while logging out"
    }
    
}

export const getAllusers=async()=>{
    try{
        const response=await axiosInstance.get("/auth/users")
        return response.data
    }catch(error){
        throw error.response?error.response.data:"Something went wrong while getting users"
    }
    
}