import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards({imageUrls}) {

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return (
       <div className='tinderCards'>
           <div className='cardContainer'>
           {
                imageUrls.filter(imgUrl =>
                    (
                        imgUrl.substring(imgUrl.indexOf('F') + 8).split('-')[0] !== '2022' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 8).split('-')[0] !== '2019' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 8).split('-')[0] !== '2018' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 8).split('-')[0] !== '2017' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 8).split('-')[0] !== '2016' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'potrait' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'employment' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'marathon' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'academic' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 8).split('-')[0] !== 'race' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'race' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'bib'
                    ))
                    .map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <h6 className='mb-3' style={{ color: 'yellow' }}>
                            {/*url.substring(url.indexOf('F') + 1).split('-')[0]*/}
                        </h6>
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-3'
                        >
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'employment').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-3'
                        >
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'marathon').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-3'
                        >
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'academic').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-3'
                        >
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => (url.substring(url.indexOf('F') + 8).split('-')[0] === 'race' ||
                url.substring(url.indexOf('F') + 1).split('-')[0] === 'race')).map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-3'
                        >
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'bib').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-3'
                        >
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'potrait').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-3'
                        >
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 8).split('-')[0] === '2017').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-0'
                        >
                            <h6 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                            {
                                decodeURIComponent(url.substring(url.indexOf('F') + 8).substring(5).substring('-').split('.')[0].replace(/_/g, ' '))
                            }
                            </h6>
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 8).split('-')[0] === '2019').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-0'
                        >
                            <h6 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', align: 'justify', color: 'cyan'}}>
                            {
                                decodeURIComponent(url.substring(url.indexOf('F') + 8).substring(5).substring('-').split('.')[0].replace(/_/g, ' '))
                            }
                            </h6>
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 8).split('-')[0] === '2022').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})` }}
                            className='cardTinder mb-0'
                        >
                            <h6 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', align: 'justify', color: 'cyan'}}>
                            {
                                decodeURIComponent(url.substring(url.indexOf('F') + 8).substring(5).substring('-').split('.')[0].replace(/_/g, ' '))
                            }
                            </h6>
                        </div>
                    </TinderCard>
                ))
            }
            </div>
        </div>
    );
}

export default TinderCards