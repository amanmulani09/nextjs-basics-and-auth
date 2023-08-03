const UserProfile = ({params}:any)=>{
    return(
        <>
        <h2>UserProfile</h2>
        <h4>User Profile <span className="p-2 ml-2 bg-orange-500 rounded text-black">{params.id}</span></h4>
        </>
    )
}

export default UserProfile;