import { FaArrowLeft } from "react-icons/fa6";
import Tables from './@tables/page'
const Home = () => {
  return (
    <div>
      <div className="flex w-100 items-center">
        <div className="w-5/6">
          <div className='flex m-4 gap-8 items-center'>
            <FaArrowLeft className="flex size-8 fill-prim-dark-300" />
            <h1 className='text-4xl font-bold font-reloceta'>
              Rules creation
            </h1>
          </div>
          <div className="h-0.5 w-96 ml-16 bg-prim-dark-300">
          </div>
        </div>
        <button className="bg-prim-green-100 text-white h-12 px-4 rounded-lg">
          Publish Feed
        </button>
      </div>
      <div className="m-4 bg-slate-100 rounded-lg w-11/12">
        <Tables />
      </div>
    </div>
  )
}

export default Home