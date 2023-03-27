



export  function goToHome(navigate){
    navigate('/')
}

export  function goToProfile(navigate){
    navigate('/profile')
}

export function goToProduct(navigate, product){
    navigate(`${product}`)
}