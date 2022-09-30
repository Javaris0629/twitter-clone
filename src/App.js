import './App.css';

function App() {
  return (
    <div className="h-screen bg-slate-400 flex flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Feed */}
      <div className="flex-1 bg-white border-x-2 overflow-auto">


        {/* Header */}
        <TwitterHeader />
        {/* Tweet Widget */}
        <TweetWidget />
        {/* Tweet Card */}
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />

      </div>
      {/* Sidebar */}
      <div className='flex flex-col bg-white w-1/3 px-6 py-2 overflow-y-scroll'>

        {/* Search Field*/}
        <div className='bg-slate-100 rounded-full p-3 flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

          <input type="text" className='bg-transparent w-full px-2 focus:ring-0 outline-none' placeholder="Search" />
        </div>

        {/* What is Happening Section */}

        <div className="bg-slate-200 flex flex-col rounded-2xl my-3 h-fit">
          <h1 className='font-black text-lg p-3'>What's Happening</h1>
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <h1 className='font-normal text-blue-600 hover:semibold cursor-pointer text-lg p-3'>Show More</h1>
        </div>
        {/*Who To Follow*/}
        <div className="bg-slate-200 flex flex-col rounded-2xl my-3 h-fit">
          <h1 className='font-black text-lg p-3'>Who to Follow</h1>
          <WhoToFollow name={"Javaris Tavel"} img={'https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/210130941_4163783643714059_3540138855283706636_n.jpg?stp=dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=oc0dlluvJ2AAX_prLEv&_nc_ht=scontent-atl3-2.xx&oh=00_AT8aPY8zm29DAADG6P80LwbVC8p0vkg73oe1tkcIYmZl3Q&oe=63350DED'}
            username={"@Javaris Tavel"}
          />
          <h1 className='font-normal text-blue-600 hover:semibold cursor-pointer text-lg p-3'>Show More</h1>
        </div>
      </div>
    </div>
  );
}

export default App;




function TweetCard(){
  return <div className='flex flex-row p-3 border-b-2'>
  <img
    src='https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/210130941_4163783643714059_3540138855283706636_n.jpg?stp=dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=oc0dlluvJ2AAX_prLEv&_nc_ht=scontent-atl3-2.xx&oh=00_AT8aPY8zm29DAADG6P80LwbVC8p0vkg73oe1tkcIYmZl3Q&oe=63350DED'
    alt='up'
    className='w-12 h-12 object-cover rounded-full'
  />
  <div className='flex flex-col w-full'>
    <div className='flex flex-row'>
      <h1 className='text-xl font-bold px-2'>Javaris Tavel</h1>
      <h1 className='text-lg font-semibold text-gray-500'>@Javaris_Tavel</h1>
      <h1 className='text-md text-gray-500 px-2'>2 min ago</h1>
      <div className='flex-1' />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>

    </div>
    <h1 className='text-base text-slate-500 px-2'>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. 
    Arcu dui vivamus arcu felis bibendum ut tristique et.
    </h1>
    {/* Like Button */}
    <div className='flex flex-row justify-between pr-44 pt-3'>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
</svg>

</div>

   {/* Sidebar */}
  </div>

</div>
}


function TwitterHeader() {
  return <div className="flex flex-row p-3 border-b-2 justify-between">
    <h1 className='text-2xl font-semibold'>Home</h1>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  </div>
}





function TweetWidget() {
  return <div className="flex flex-row p-3 w-full border-b-2">
    <img
      src='https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/210130941_4163783643714059_3540138855283706636_n.jpg?stp=dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=oc0dlluvJ2AAX_prLEv&_nc_ht=scontent-atl3-2.xx&oh=00_AT8aPY8zm29DAADG6P80LwbVC8p0vkg73oe1tkcIYmZl3Q&oe=63350DED'
      alt='up'
      className='w-12 h-12 object-cover rounded-full'
    />
    <div className="flex flex-col px-3 w-full">
      <input type="text" className="bg-transparent foucs:ring-0 outline-none h-10"
        placeholder="What's happening"
      />

      <div className='flex flex row text-blue-500 justify-evenly items-center'>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
        <button className='px-5 py-2 rounded-full text-white font-semibold bg-blue-600'>Tweet</button>
      </div>
    </div>
  </div>
}







function WhoToFollow(props) {
  const { img, name, username } = props
  return <div className='flex flex-row p-3 hover:bg-gray-400 cursor-pointer items-center py-2'>
    <img
      src={img ?? 'https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/210130941_4163783643714059_3540138855283706636_n.jpg?stp=dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=oc0dlluvJ2AAX_prLEv&_nc_ht=scontent-atl3-2.xx&oh=00_AT8aPY8zm29DAADG6P80LwbVC8p0vkg73oe1tkcIYmZl3Q&oe=63350DED'}
      alt="userpic" className="w-14 h-14 object-cover rounded-full" />
    <div className="flex flex-col flex-1 px-3">
      <h1 className='text-xl font-bold'>{name ?? "Javaris Tavel"}</h1>
      <h1 className='text-lg text-gray-500 my-1'>{username ?? "@Javaris_Tavel"}</h1>
    </div>
    <button className='rounded-full bg-black text-white px-5 py-2 h-fit'>Follow</button>
  </div>
}



function TrendingCard({ params }) {

  return <div className=" flex flex-col p-3 hover:bg-slate-300 cursor-pointer">
    <h1 className="text-md text-slate-500 flex flex-row justify-between">Entertainment * Trending <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg></h1>

    <h1 className="text-xl text-black font-bold">#React_js</h1>
    <h1 className="text-md text-slate-500">1.3K Tweets</h1>
    <h1 className="text-lg">Entertainment</h1>
  </div>
}





function Sidebar() {
  return (
    <div className='flex flex-col w-1/3 h-full justify-start items-start px-10 bg-white'>
      {/* Twitter Icon */}
      <img src="https://tse4.mm.bing.net/th?id=OIP.o06snWh5G4LQ1fJbNlarpAHaGB&pid=Api&P=0"
        alt="Twitter"
        className='w-10 pb-5 pt-2'>
      </img>
      <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>} title='Home' />
      {/* Explore Section */}
      <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
      </svg>
      } title='Explore' />

      {/* Notification */}
      <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
      </svg>
      } title='Notifications' />

      {/* Messsage */}
      <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>

      } title='Messages' />

      {/* Bookmark*/}
      <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
      </svg>

      } title='Bookmarks' />

      {/* List*/}
      <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
      } title='List' />

      {/*Profile */}
      <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
      } title='Profile' />

      {/*More*/}
      <MenuItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>

      } title='More' />

      <button className='p-4 bg-blue-500 rounded-full w-full font-bold text-xl text-white'>{" "}Tweet</button>

      <div className='mt-3' />

      {/*Profile Pill */}
      <div className='w-full hover:bg-slate-200 flex flex-row justify-around items-center p-3 rounded-full cursor-pointer'>
        {/*User Picture*/}
        <img src='https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/210130941_4163783643714059_3540138855283706636_n.jpg?stp=dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=oc0dlluvJ2AAX_prLEv&_nc_ht=scontent-atl3-2.xx&oh=00_AT8aPY8zm29DAADG6P80LwbVC8p0vkg73oe1tkcIYmZl3Q&oe=63350DED'
          alt="up" className='w-12 rounded-full'
        />
        {/*User Info*/}
        <div className="flex flex-col flex-1 px-2">
          <h1 className='text-lg font-bold'>Javaris Tavel</h1>
          <h1 className='text-lg font-meduim text-gray-600 '>@Javaris_Tavel</h1>
        </div>
        {/*More Button*/}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
      </div>
    </div>
  )

}






function MenuItem(props) {

  const { title, icon } = props
  return (
    <div className='flex flex-row hover:bg-slate-200 cursor-pointer rounded-full p-3'>
      {icon ?? "icon"}

      <h1 className="text xl font-medium hover:font-bold px-3">{title ?? "Menu"}</h1>

    </div>
  )
}
