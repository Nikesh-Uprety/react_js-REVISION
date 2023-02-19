import { useState } from 'react';
const Forms =({onSendNames, lastId, onQueryChange})=>{
    const clearData = {
        name: '',
        bio: ''
      }
    let [formData, setFormData] = useState(clearData)
    function namePublish() {
        const namesInfo = {
          id: lastId + 1,
          name: formData.name,
          bio: formData.bio
        }
        onSendNames(namesInfo);
        setFormData(clearData);
    }
    return(
        <>  
<form className="w-full max-w-sm mt-1">
        <h2 className="font-bold ">I used TailwindCSS to create the below form:</h2>
        <h2 className="font-bold bg-blue-400 ">Enter the fields to add:</h2>
  <div className="md:flex md:items-center mt-4 mb-4">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      onChange={(event) => { setFormData({ ...formData, name: event.target.value }) }}
                value={formData.name}
                name="name"
      id="inline-full-name" type="text" required placeholder="Enter your name sucker:"/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Bio
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" 
      type="text" 
      onChange={(event) => { setFormData({ ...formData, bio: event.target.value }) }}
                value={formData.bio}
      placeholder="Enter the bio" name="bio" required/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button onClick={namePublish} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-2" type="button">
        Enter
      </button>
    </div>
  </div>

</form>
<form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" mt-4 onChange={(event) => { onQueryChange(event.target.value) }} name="query" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
        <p>Fun Fact: This SearchBar actually works :)</p>
    </div>
    
</form>
        </>
    
    )
};
export default Forms