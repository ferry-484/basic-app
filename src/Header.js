const Header = (props) =>{

    console.log(props)
    
    return(
        <div>
        
            First Name : {props.object.firstname} <br />

            Last Name : {props.object.lastname} <br />

            Email : {props.object.email} <br />

        </div>

        


    )
}
export default Header;