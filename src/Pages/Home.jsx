

const Home = () => {
  return (
    <div className=' w-full h-full flex-col px-10 py-8'>
        <h1 className=" text-black text-3xl font-semibold font-sans">Home Page</h1>
        <div className=" w-full min-h-[50vh] justify-center items-center flex flex-col">
            <table className=" w-[80%] text-center overflow-hidden overflow-y-scroll border border-black">
                <thead className=" border-b bg-gray-800">
                    <tr>
                        <th scope="col" className=" text-sm font-medium text-white px-6 py-4">
                            #
                        </th>
                        <th scope="col" className=" text-sm font-medium text-white px-6 py-4">
                            Name
                        </th>
                        <th scope="col" className=" text-sm font-medium text-white px-6 py-4">
                            Email
                        </th>
                        <th scope="col" className=" text-sm font-medium text-white px-6 py-4">
                            Phone
                        </th>
                        <th scope="col" className=" text-sm font-medium text-white px-6 py-4">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=" bg-white border-b border-black">
                        <td className=" px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                            1
                        </td>
                        <td className=" px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                            Mark
                        </td>
                        <td className=" px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                            Otto
                        </td>
                        <td className=" px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                            @mdo
                        </td>
                        <td className=" flex space-x-4 justify-center mt-1">
                            <button className=" px-6 py-2 text-white font-normal bg-black rounded-lg">View</button>
                            <button className=" px-6 py-2 text-white font-normal bg-blue-600 rounded-lg">Edit</button>
                            <button className=" px-6 py-2 text-white font-normal bg-red-600 rounded-lg">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home