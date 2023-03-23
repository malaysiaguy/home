import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase'
import {
    NavLink,
    Table,
    Button
} from 'reactstrap'
import { FaElementor } from 'react-icons/fa'
import MainScreen from '../components/MainScreen'
import CustomAccordion from '../components/CustomAccordion'
import ExperienceItem from '../components/ExperienceItem'
import SkillItem from '../components/SkillItem'
import useSortableData from '../features/useSortableData'

function Summary() {
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
    const [ experienceFB, setExperienceFB ] = useState([])
    const [ skillFB, setSkillFB ] = useState([])
    const { items: experienceSummariesItems, requestSort: experienceSummariesRS } = useSortableData(experienceFB)
    const { items: skillSummaryitems, requestSort: skillSummaryRS } = useSortableData(skillFB)

    useEffect( () => {
        fetchSkills()
    }, [])

    const fetchSkills = async () => {
        await getDocs(collection(db, "skillsummaries"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setSkillFB(newData);
        })
    }

    useEffect( () => {
        fetchExperiences()
    }, [])

    const fetchExperiences = async () => {
        await getDocs(collection(db, "experiencesummaries"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setExperienceFB(newData);
        })
    }

{/*    if(isLoadingSkill && isLoadingExperience) {
        return <Spinner />
    }
*/}
    return (
    <>
    {
        experienceSummariesItems ? (
            <Table responsive striped>
                <thead bgcolor='yellow'>
                    <tr>
                        <th className='col-sm-10' style={{ color: 'red' }}>Working Experience 工作经验 Pengalaman Pekerjaan</th>
                        <th></th>
                    </tr>
                </thead>
                <thead bgcolor='grey'>
                    <tr>
                        <th className='th col-sm-8' onClick={() => experienceSummariesRS('experience')}>Description</th>
                        <th className='col-sm-4' onClick={() => experienceSummariesRS('years')}>No of Years</th>
                    </tr>
                </thead>
                 {
                    experienceSummariesItems.map((summary, key) => (
                        <ExperienceItem key={key} summary={summary} />
                ))}
            </Table>
        ) : (
            <div>
                <h3 style={{ color: 'yellow' }}>
                    Coming soon ...
                </h3>
            </div>
        ) }
    {
        skillSummaryitems ? (
            <Table responsive striped>
                <thead bgcolor='yellow'>
                    <tr>
                        <th className='col-sm-10' style={{ color: 'red' }}>Skill Sets 技能 Kemahiran</th>
                        <th></th>
                    </tr>
                </thead>
                <thead bgcolor='grey'>
                    <tr>
                        <th className='th col-sm-8' onClick={() => skillSummaryRS('skill')}>Description</th>
                        <th className='col-sm-4' onClick={() => skillSummaryRS('years')}>No of Years</th>
                    </tr>
                </thead>
                {
                    skillSummaryitems.map((summary, key) => (
                        <SkillItem key={key} summary={summary} />
                ))}
            </Table>
        ) : (
            <div>
                <h3 style={{ color: 'yellow' }}>
                    Coming soon ...
                </h3>
            </div>
        ) }
    </>
    )
}

export default Summary
