const validEmail = (email) =>{

    return email.match( /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/ )
}


const validPass = (password) =>{
    return password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/)
}
module.exports = {validEmail,validPass}
