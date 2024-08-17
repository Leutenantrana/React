
const Pagination = ({totalItems, itemsPerPage, currentPage, onPageChange}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    console.log(totalPages)
    const handleChange =(page)=>{
        onPageChange(page)
    }

    const renderPage =()=>{
        const pageNumber =[];
       for (let i =1; i<=totalPages; i++){
         pageNumber.push(
            <button 
              key={i}
              onClick={()=>handleChange(i)}
              className={currentPage === i ? 'active' : ""}
            >
            {i}
            </button>
         );
       }
       return pageNumber;
    }

    return (
    <div className='pagination'>
        <button
          className='butts'
          onClick={()=>handleChange(currentPage-1)}
          disabled={ currentPage===1}
        >
            Previous
        </button>
        {renderPage()}
        <button
          className='butts'
          onClick={()=>handleChange(currentPage+1)}
          disabled={totalPages === currentPage}
        >
            Next
        </button>
      
    </div>
  )
}

export default Pagination
