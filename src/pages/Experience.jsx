import { useEffect, useState } from 'react'
import { FaBriefcase, FaCaretRight } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Table,
    Button
} from 'reactstrap'
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase'
import MainScreen from '../components/MainScreen'
import CustomAccordion from '../components/CustomAccordion'
import ProjectItem from '../components/ProjectItem'
import useSortableData from '../features/useSortableData'
import SimpleDateTime  from 'react-simple-timestamp-to-date';

function Experience() {
    const [ projectsFB, setProjectsFB ] = useState([])
    const [ worksFB, setWorksFB ] = useState([])
    const { items: projectsItems, requestSort: requestSortProjects } = useSortableData(projectsFB)

    let isVisible = false

    useEffect( () => {
        fetchWorks()
    }, [])

    const fetchWorks = async () => {
        await getDocs(collection(db, "works"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setWorksFB(newData);
        })
    }

    useEffect( () => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        await getDocs(collection(db, "projects"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setProjectsFB(newData);
        })
    }

    return (
        <>
            {
                worksFB ? (
                           worksFB.filter((works) => works.category === 'IT' && works.workType !== 'Internship').map((work, key) => (
                            <Table responsive striped key={key}>
                                <thead bgcolor='yellow'>
                                    <tr>
                                        <th className='th-sm-12' colSpan='4' style={{ color: 'red' }}>IT Industry 资讯科技 Bidang IT</th>
                                    </tr>
                                </thead>
                                <thead bgcolor='#D3D3D3'>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Company:</th>
                                        <td className='td' colSpan='2'>{work.company}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Location:</th>
                                        <td className='td' colSpan='2'>{work.location}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Period:</th>
                                        <td className='td' colSpan='2'>
                                            <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                                            { (work.fromDate).toDate() }
                                            </SimpleDateTime>
                                        {' '}to{' '}
                                            <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                                            { (work.toDate).toDate() }
                                            </SimpleDateTime>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Position:</th>
                                        <td className='td' colSpan='2'>{work.position}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Reason of Leaving:</th>
                                        <td className='td' colSpan='2'>{work.reasonLeaving}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Task Assigned:</th>
                                        <td className='td-right' colSpan='2'>
                                        {   isVisible && (
                                            <div>
                                            </div>
                                        )}
                                        </td>
                                    </tr>
                                </thead>
                                <thead bgcolor='grey' key={work.id}>
                                    <tr>
                                        <th className='th th-sm-1' onClick={() => requestSortProjects('projectDuration')}>Duration</th>
                                        <th className='th th-sm-1' onClick={() => requestSortProjects('projectRole')}>Role</th>
                                        <th className='th th-sm-1' onClick={() => requestSortProjects('projectName')}>Name</th>
                                        <th className='th' onClick={() => requestSortProjects('projectDetails')}>Description</th>
                                    </tr>
                                </thead>
                                {
                                    projectsItems ? (
                                        projectsItems.filter(item => item.company === work.id).map((item) => (
                                        <tbody key={item.id}>
                                            <ProjectItem item={item} />
                                        </tbody>
                                    ))
                                    ) : (
                                        <div>
                                            <h3 style={{ color: 'yellow' }}>
                                                Coming soon ...
                                            </h3>
                                        </div>
                                    )
                                }
                            </Table>
                            ))
                ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Coming soon ...
                    </h3>
                </div>
                )
            }
            {
                worksFB ? (
                            worksFB.filter((works) => works.category !== 'IT').map((work, key) => (
                            <Table responsive striped key={key}>
                                <thead bgcolor='yellow'>
                                    <tr>
                                        <th className='th-sm-12' colSpan='4' style={{ color: 'red' }}>Non IT Industry 非资讯科技 Bukan Bidang IT</th>
                                    </tr>
                                </thead>
                                <thead bgcolor='#D3D3D3'>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Company:</th>
                                        <td className='td' colSpan='2'>{work.company}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Location:</th>
                                        <td className='td' colSpan='2'>{work.location}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Period:</th>
                                        <td className='td' colSpan='2'>
                                            <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                                            { (work.fromDate).toDate() }
                                            </SimpleDateTime>
                                        {' '}to{' '}
                                            <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                                            { (work.toDate).toDate() }
                                            </SimpleDateTime>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Position:</th>
                                        <td className='td' colSpan='2'>{work.position}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Reason of Leaving:</th>
                                        <td className='td' colSpan='2'>{work.reasonLeaving}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Task Assigned:</th>
                                        <td className='td-right' colSpan='2'>
                                        {   isVisible && (
                                            <div>
                                            </div>
                                        )}
                                        </td>
                                    </tr>
                                </thead>
                                <thead bgcolor='grey' key={work.id}>
                                    <tr>
                                        <th className='th th-sm-1' onClick={() => requestSortProjects('projectDuration')}>Duration</th>
                                        <th className='th th-sm-1' onClick={() => requestSortProjects('projectRole')}>Role</th>
                                        <th className='th th-sm-1' onClick={() => requestSortProjects('projectName')}>Name</th>
                                        <th className='th' onClick={() => requestSortProjects('projectDetails')}>Description</th>
                                    </tr>
                                </thead>
                                {
                                    projectsItems ? (
                                        projectsItems.filter(item => item.company === work.id).map((item) => (
                                        <tbody key={item.id}>
                                            <ProjectItem item={item} />
                                        </tbody>
                                    ))
                                    ) : (
                                        <div>
                                            <h3 style={{ color: 'yellow' }}>
                                                Coming soon ...
                                            </h3>
                                        </div>
                                    )
                                }
                            </Table>
                        ))
                ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Coming soon ...
                    </h3>
                </div>
                )
            }
            {
                worksFB ? (
                            worksFB.filter((works) => works.category === 'IT' && works.workType === 'Internship').map((work, key) => (
                            <Table responsive striped key={key}>
                                <thead bgcolor='yellow'>
                                    <tr>
                                        <th className='th-sm-12' colSpan='4' style={{ color: 'red' }}>Internship 实习 Latihan Amali</th>
                                    </tr>
                                </thead>
                                <thead bgcolor='#D3D3D3'>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Company:</th>
                                        <td className='td' colSpan='2'>{work.company}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Location:</th>
                                        <td className='td' colSpan='2'>{work.location}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Period:</th>
                                        <td className='td' colSpan='2'>
                                            <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                                            { (work.fromDate).toDate() }
                                            </SimpleDateTime>
                                        {' '}to{' '}
                                            <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                                            { (work.toDate).toDate() }
                                            </SimpleDateTime>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Position:</th>
                                        <td className='td' colSpan='2'>{work.position}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Reason of Leaving:</th>
                                        <td className='td' colSpan='2'>{work.reasonLeaving}</td>
                                    </tr>
                                    <tr>
                                        <th className='th th-sm-2 px-3 h6'  colSpan='2'>Task Assigned:</th>
                                        <td className='td-right' colSpan='2'>
                                        {   isVisible && (
                                            <div>
                                            </div>
                                        )}
                                        </td>
                                    </tr>
                                </thead>
                                <thead bgcolor='grey' key={work.id}>
                                    <tr>
                                        <th className='th th-sm-1' onClick={() => requestSortProjects('projectDuration')}>Duration</th>
                                        <th className='th th-sm-1' onClick={() => requestSortProjects('projectRole')}>Role</th>
                                        <th className='th th-sm-1' onClick={() => requestSortProjects('projectName')}>Name</th>
                                        <th className='th' onClick={() => requestSortProjects('projectDetails')}>Description</th>
                                    </tr>
                                </thead>
                                {
                                    projectsItems ? (
                                        projectsItems.filter(item => item.company === work.id).map((item) => (
                                        <tbody key={item.id}>
                                            <ProjectItem item={item} />
                                        </tbody>
                                    ))
                                    ) : (
                                        <div>
                                            <h3 style={{ color: 'yellow' }}>
                                                Coming soon ...
                                            </h3>
                                        </div>
                                    )
                                }
                            </Table>
                        ))
                ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Coming soon ...
                    </h3>
                </div>
                )
            }
        </>
    )
}

export default Experience
