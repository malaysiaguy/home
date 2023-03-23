import { useEffect, useState } from 'react'
import {
    Col,
    Row
} from 'reactstrap'
import { storage } from '../firebase'
import {
    ref,
    getDownloadURL,
    listAll,
} from 'firebase/storage'
import TinderCards from '../TinderCards'

function Certificate() {
    const [imageUrls, setImageUrls] = useState([])
    const imagesListRef = ref(storage, 'academic-cert/')
    const [imageSocialUrls, setImageSocialUrls] = useState([])
    const imagesSocialListRef = ref(storage, 'social-cert/')
    const [imageMarathonUrls, setImageMarathonUrls] = useState([])
    const imagesMarathonListRef = ref(storage, 'marathon-cert/')

    useEffect(() => {
        listAll(imagesListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(imagesSocialListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageSocialUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(imagesMarathonListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageMarathonUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <>
        <Row className='text-justify g-1'>
            <Col className='col-lg-12'>
                <h3 style={{ color: 'cyan', align: 'center' }}>Please Swipe the Photos 请滑动相片 Sila Leret Foto</h3>
            </Col>
        </Row>
        <Row className='text-justify g-1'>
            <Col className='col-lg-4'>
            {
                imageUrls.length > 0 ? (
                <>
                    <h3 style={{ color: 'red', align: 'center' }}>Academic 学术 Akademik</h3>
                    <TinderCards imageUrls={imageUrls}></TinderCards>
                </>
                ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Image is loading ...
                    </h3>
                </div>
                )
            }
            </Col>
            <Col className='col-lg-4'>
            {
                imageSocialUrls.length > 0 ? (
                <>
                    <h3 style={{ color: 'red', align: 'center' }}>Social 社区活动 Sosial</h3>
                    <TinderCards imageUrls={imageSocialUrls}></TinderCards>
                </>
                ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Image is loading ...
                    </h3>
                </div>
                )
            }
            </Col>
            <Col className='col-lg-4'>
            {
                imageMarathonUrls.length > 0 ? (
                <>
                    <h3 style={{ color: 'red', align: 'center' }}>Sports 运动 Sukan</h3>
                    <TinderCards imageUrls={imageMarathonUrls}></TinderCards>
                </>
                ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Image is loading ...
                    </h3>
                </div>
                )
            }
            </Col>
        </Row>
        </>
    )
}

export default Certificate
