import CustomAccordion from '../components/CustomAccordion'
import Main from '../components/Main'
import HallOfFame from '../components/HallOfFame'
import Certificate from '../components/Certificate'
import Social from '../components/Social'
import Race from '../components/Race'
import Footer from '../components/Footer'
import Summary from './Summary'
import Experience from './Experience'

function Home() {

    return (
        <section id='intro' className='m-1 text-light bgImage'>
            <Main />
            <CustomAccordion header='Hall Of Fame 星光大道 Ruang Kegemilangan' children={
                <HallOfFame />
            } item='accordionItem1'>
            </CustomAccordion>
            <CustomAccordion header='Certificate 文凭 Sijil' children={
                <Certificate />
            } item='accordionItem2'>
            </CustomAccordion>
            <CustomAccordion header='Activity 活动 Aktiviti' children={
                <Social />
            } item='accordionItem3'>
            </CustomAccordion>
            <CustomAccordion header='Race 赛跑 Larian' children={
                <Race />
            } item='accordionItem4'>
            </CustomAccordion>
            <CustomAccordion header='Summary 总结 Ringkasan' children={
                <Summary />
            } item='accordionItem5'>
            </CustomAccordion>
            <CustomAccordion header='Experience 经验 Pengalaman' children={
                <Experience />
            } item='accordionItem6'>
            </CustomAccordion>
            <Footer />
        </section>
    )
}

export default Home