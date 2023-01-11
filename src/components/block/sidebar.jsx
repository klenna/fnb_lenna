import Link from 'next/link'
import SearchInput from 'components/form/search-input'

const nav = [{
  title: 'Code Documentation',
  iconClass: 'bx bx-code-block p-1 mr-4 bg-pink-500 group-hover:text-white rounded text-gray-900 trans-g',
  textClass: 'group-hover:text-pink-500 trans-g',
}, {
  title: 'Directory Management',
  iconClass: 'bx bxs-folder-open p-1 mr-4 bg-purple-500 group-hover:text-white rounded text-gray-900 trans-g',
  textClass: 'group-hover:text-purple-500 trans-g',
}, {
  title: 'Flow Explanation',
  iconClass: 'bx bxs-conversation p-1 mr-4 bg-indigo-500 group-hover:text-white rounded text-gray-900 trans-g',
  textClass: 'group-hover:text-indigo-500 trans-g',
}]

export default function Sidebar() {
  return (
    <div className='w-[325px] h-screen sticky top-0 left-0'>
      <div className='w-full h-[160px] flex justify-center items-end pb-8 tm-base border-r px-[10px]'>
        <div className='flex flex-col gap-6 w-full'>
          <div className='flex items-center gap-2 relative'>
            <i className='bx bxl-play-store text-5xl text-primary' />
            <h6 className='text-[32px] font-bold font-titillium text-primary tracking-wider'>Playground</h6>
          </div>
          <SearchInput />
        </div>
      </div>
      <div className='p-1 pl-0 tm-base border-r'>
        <div className='w-full h-[calc(100vh-170px)] overflow-auto fancy-scroll px-[10px] rounded'>
          <div className='flex flex-col gap-2 mb-3'>
            {
              nav.map((item, index) => (
                <Link
                  className='block py-1 group'
                  href='#'
                  key={index}
                >
                  <i className={item.iconClass} />
                  <span className={item.textClass}>Code Documentation</span>
                </Link>
              ))
            }
          </div>
          <p className='font-bold text-primary my-3 mt-6'>Get Started</p>
          {
            Array.from({ length: 6 }).map((_, i) => (
              <Link className='block py-1 group dark:border-gray-700 border-l pl-2 hover:pl-4 trans-g dark:hover:border-white dark:hover:border-l-2 hover:border-primary' href='#' key={i}>
                <span className='group-hover:text-primary group-hover:font-bold trans-g'>Flow Explanation</span>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
