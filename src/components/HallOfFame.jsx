import { useEffect, useState } from 'react'
import {
    Container,
    Col,
    Row,
} from 'reactstrap'
import { storage } from '../firebase'
import {
    ref,
    getDownloadURL,
    listAll,
} from 'firebase/storage'
import TinderCards from '../TinderCards'

function HallOfFame() {
    const [imageUrls, setImageUrls] = useState([])
    const imagesListRef = ref(storage, 'awards/')
    const [imageMarathonUrls, setImageMarathonUrls] = useState([])
    const imagesMarathonListRef = ref(storage, 'marathons/')
    const [imageAcademicUrls, setImageAcademicUrls] = useState([])
    const imagesAcademicListRef = ref(storage, 'academics/')

    useEffect(() => {
        listAll(imagesListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
//                    console.log(url)
                    setImageUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(imagesMarathonListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
//                    console.log(url)
                    setImageMarathonUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(imagesAcademicListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageAcademicUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <Container className='text-light bgImage'>
            <Row className='text-justify g-4'>
                <Col className='col-lg-12'>
                    <h3 style={{ color: 'cyan' }}>Please Swipe the Photos 请滑动相片 Sila Leret Foto</h3>
                </Col>
            </Row>
            <Row className='text-justify g-4'>
            {
                imageUrls.length > 0 ? (
                <Col className='col-lg-4'>
                    <h3 className='mb-3' style={{ color: 'yellow', align: 'center' }}>
                        Employment 职场 Pekerjaan
                    </h3>
                    <TinderCards imageUrls={imageUrls}></TinderCards>
                </Col>
            ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Image is loading ...
                    </h3>
                </div>
                )
            }
            {
                imageMarathonUrls.length > 0 ? (
                <Col className='col-lg-4'>
                    <h3 className='mb-3' style={{ color: 'yellow', align: 'center' }}>
                        Marathon 马拉松 Perlumbaan
                    </h3>
                    <TinderCards imageUrls={imageMarathonUrls}></TinderCards>
                </Col>
            ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Image is loading ...
                    </h3>
                </div>
                )
            }
            {
                imageAcademicUrls.length > 0 ? (

                <Col className='col-lg-4'>
                    <h3 className='mb-3' style={{ color: 'yellow', align: 'center' }}>
                        Academic 学业 Akademik
                    </h3>
                    <TinderCards imageUrls={imageAcademicUrls}></TinderCards>
                </Col>
            ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Image is loading ...
                    </h3>
                </div>
                )
            }
            </Row>
        </Container>
    )
}

export default (HallOfFame)
