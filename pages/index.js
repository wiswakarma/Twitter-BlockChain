import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Feed from '../components/home/Feed'
import Widgets from '../components/Widgets'

const style = {
  wrapper : `flex justify-center h-full w-screen select-none bg-[#15202b] text-white`,
  content : `max-w-[1400px] w-2/3 flex justify-between`

}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <Widgets />

        
        
      </div>
    </div>
  )
}

export default Home
