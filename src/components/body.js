const Body=({name, onDeleteNames})=>{
    return(  
<> 
<div className="w-full border-t-4 border-gray-500 mt-2 max-w-sm bg-white border border-gray-10 rounded-lg shadow ">
    <div className="flex justify-end px-2 pt-2"> 
    </div>
    <div className="flex flex-col items-center pb-5">
    <div className='w-24 h-24 mb-3 rounded-full shadow-lg'></div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">{name.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{name.bio}</span>
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={() => onDeleteNames(name.id)} type="button">
        Delete
      </button>
    </div>
</div>    
</>      
    )
}
export default Body