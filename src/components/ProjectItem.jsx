import {
    Table,
    Button
} from 'reactstrap'

function ProjectItem({item}) {

    return (
            <tr key={item._id}>
                <td className='td col-sm-1 text-warning'>{item.projectDuration}</td>
                <td className='td col-sm-1 text-warning'>{item.projectRole}</td>
                <td className='td col-sm-1 text-warning'>{item.projectName}</td>
                <td className='td text-warning'>
                {
                    item.projectDetails.length > 0 ? item.projectDetails.map( detail => (
                        <div>{detail}</div>
                    )
                    ):(
                        <div></div>
                    )
                }
                </td>
            </tr>
    )
}

export default ProjectItem