import axios from "axios"

export default function GetUsers(){

    axios.post("")
    return(
        <>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Contact</td>

                </tr>
            </table>
        </>
    )
}