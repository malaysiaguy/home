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

function Race() {
    const [image2016Urls, setImage2016Urls] = useState([])
    const images2016ListRef = ref(storage, 'races/2016/')
    const [image2017Urls, setImage2017Urls] = useState([])
    const images2017ListRef = ref(storage, 'races/2017/')
    const [image2018Urls, setImage2018Urls] = useState([])
    const images2018ListRef = ref(storage, 'races/2018/')
    const [image2019Urls, setImage2019Urls] = useState([])
    const images2019ListRef = ref(storage, 'races/2019/')

    useEffect(() => {
        listAll(images2016ListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImage2016Urls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(images2017ListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImage2017Urls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(images2018ListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImage2018Urls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(images2019ListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImage2019Urls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <>
        <Row className='text-justify g-1'>
            <Col className='col-sm-12'>
                <h3 style={{ color: 'cyan', align: 'center' }}>Please Swipe the Photos 请滑动相片 Sila Leret Foto</h3>
            </Col>
        </Row>
        <Row className='text-justify g-1'>
            <Col className='col-sm-3'>
                <div>
                    <h3 style={{ color: 'red', align: 'center' }}>2019</h3>
                </div>
            {
                image2019Urls.length > 0 ? (
                <>
                    <TinderCards imageUrls={image2019Urls}></TinderCards>
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
            <Col className='col-sm-3'>
                <div>
                    <h3 style={{ color: 'red', align: 'center' }}>2018</h3>
                </div>
            {
                image2018Urls.length > 0 ? (
                <>
                    <TinderCards imageUrls={image2018Urls}></TinderCards>
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
            <Col className='col-sm-3'>
                <div>
                    <h3 style={{ color: 'red', align: 'center' }}>2017</h3>
                </div>
            {
                image2017Urls.length > 0 ? (
                <>
                    <TinderCards imageUrls={image2017Urls}></TinderCards>
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
            <Col className='col-sm-3'>
                <div>
                    <h3 style={{ color: 'red', align: 'center' }}>2016</h3>
                </div>
            {
                image2016Urls.length > 0 ? (
                <>
                    <TinderCards imageUrls={image2016Urls}></TinderCards>
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

export default Race
