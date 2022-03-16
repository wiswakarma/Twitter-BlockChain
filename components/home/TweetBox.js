import { useState } from "react"


const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  }

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState('');

    const postTweet = (event) => {
        event.preventDefault()
        console.log(tweetMessage)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.tweetBoxLeft}>
                <img src="https://pbs.twimg.com/profile_images/378800000312861474/e104c609eb90c69121c465776864a83c_400x400.jpeg" className={style.profileImage} alt='profile image'></img>
            </div>
            <div className={style.tweetBoxRight}>
                <form>
                    <textarea
                        className={style.inputField}
                        placeholder='Whats Happening'
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                    ></textarea>
                    <div className={style.formLowerContainer}>
                        <div className={style.iconsContainer}></div>
                        <button 
                            type='submit' 
                            onClick={(event) => {postTweet(event)}}
                            className={`${style.submitGeneral} ${tweetMessage ? style.activeSubmit : style.inactiveSubmit}`}>
                            Tweet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox