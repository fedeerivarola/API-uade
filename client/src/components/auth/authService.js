let loginUser = (data)=>{
    console.log("Asdasdfsad");
    fetch(
        {            
            url:"http://localhost:3000/api/auth/login",
            method: "POST",
            body: data
    })
    .then(data => {return data},
        (err)=>{return err});  
}

module.exports = {loginUser} 