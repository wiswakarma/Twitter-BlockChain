import React from 'react'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName : 'Wiswakarma',
        userName : '0x773169aBC85ad536E33A57b1c5Bd3a6047a811Fe',
        avatar : 'https://pbs.twimg.com/profile_images/378800000312861474/e104c609eb90c69121c465776864a83c_400x400.jpeg',
        text : 'gm',
        isProfileImageNft : false,
        timestamp : '2022-03-15T09:15:00.000Z',
    },
    {
        displayName : 'Wiswakarma',
        userName : '0x773169aBC85ad536E33A57b1c5Bd3a6047a811Fe',
        avatar : 'https://pbs.twimg.com/profile_images/378800000312861474/e104c609eb90c69121c465776864a83c_400x400.jpeg',
        text : 'gm',
        isProfileImageNft : true,
        timestamp : '2022-03-15T09:15:00.000Z',
    },
    {
        displayName : 'Wiswakarma',
        userName : '0x773169aBC85ad536E33A57b1c5Bd3a6047a811Fe',
        avatar : 'https://pbs.twimg.com/profile_images/378800000312861474/e104c609eb90c69121c465776864a83c_400x400.jpeg',
        text : 'gm',
        isProfileImageNft : false,
        timestamp : '2022-03-15T09:15:00.000Z',
    },
    {
        displayName : 'Wiswakarma',
        userName : '0x773169aBC85ad536E33A57b1c5Bd3a6047a811Fe',
        avatar : 'https://pbs.twimg.com/profile_images/378800000312861474/e104c609eb90c69121c465776864a83c_400x400.jpeg',
        text : 'gm',
        isProfileImageNft : true,
        timestamp : '2022-03-15T09:15:00.000Z',
    },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
        {tweets?.map((tweet, index) => (
            <Post 
                key={index}
                displayName={tweet.displayName}
                userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                avatar={tweet.avatar}
                text={tweet.text}
                isProfileImageNft={tweet.isProfileImageNft}
                timestamp={tweet.timestamp}
            />
        ))}
    </div>
  )
}

export default ProfileTweets