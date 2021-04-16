import { render } from "@testing-library/react";
import React , {useState,useEffect} from "react";
//import Header from './Header'
//state is an object and is a collection of variables
//spread operators ...
//state -- can be updated , can only be used in a single component
//props -- cannot be updated , can be used in the whole project , used to transfer data between components --> parent to child components



const Child = (props) =>{
    useEffect( ()=>{
        getUsersFromApi()
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json()) 
        // .then(data => {

        //     saveUserData(data);
        //     console.log(data);

        
        // })
        // .catch(err=> console.log(err));
  
    } , [] )

  
    const getUsersFromApi = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(res=>{
            console.log(res)
            saveUserData(res) 
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const [object , setFormData ] = useState({});

    

    const [ allUserData , saveUserData ] = useState([]) 

    const [datafromprops , saveDataFromProps ] = useState({})

    const saveData = () =>{
        //send data to new page

        console.log(object)
    }

    return(
        <>
            {/* <Header object={object} /> */}
            <table>
                <th>
                    <td>Name</td>
                </th>
                <tbody>
                    {
                        allUserData.map( (value,index)=>{

                            // return(
                            //     <tr> {value.name} </tr>
                            // )
                            <tr>
                                <td>
                                {value.name}
                                </td> 
                                <td>
                                {value.email}
                                </td> 
                                <td>
                                {value.username}
                                </td> 
                                 </tr>

                        } )
                    }


                </tbody>
            </table>

           <h2>This data is coming form child component</h2>
            <form onSubmit={ (e) => e.preventDefault() }>

                
                
                <input type="text" value={object.firstname} onChange= { (e) => setFormData({ ...object,  firstname : e.target.value }) }  />

                <input type="text" value={object.lastname} onChange= { (e) => setFormData({ ...object,  lastname : e.target.value }) }  />
                
                <input type="text" value={object.email} onChange= { (e) => setFormData({ ...object,  email : e.target.value }) }  />

                
                <button onClick={ () => saveData() }>submit</button>
            </form>
           
        </>
    )
}

export default Child;