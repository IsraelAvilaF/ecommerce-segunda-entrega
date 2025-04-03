import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function User({user, deleteUsers}) {
    return (
        <tr>

            <td className="name-cell">
                {user.name}
            </td>

            <td className="email-cell">
                {user.email}
            </td>

            <td className="password-cell">
                {(user.password)}
            </td>

            <td className="fechaNacimiento-cell">
                {new Date(user.bday).toLocaleDateString('es-PE')}
            </td>

            <td className="province-cell">
                {user.province}
            </td>

            <td className="image-cell">
                <img 
                    src={user.profile}
                    alt={user.name}
                    width="60" 
                />
            </td>

            <td className="tools-cell">
                <button className="btn">
                    <FontAwesomeIcon icon={faPencil}/>
                </button>
                <button className="btn button-xs btn-danger" onClick={() => deleteUsers(user.id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </td>
            
        </tr>
    )
}