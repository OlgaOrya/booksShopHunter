function Buttons ({filteredStyleBook}){
    return(
        <div className="container">
            <button className="btnChose filter" onClick ={() => filteredStyleBook('detective')}>Detectives</button>
            <button className="btnChose filter" onClick ={() => filteredStyleBook('fantasy')}>Fantasy</button>
            <button className="btnChose filter" onClick ={() => filteredStyleBook('adventure')}>Adventures</button>
            <button className="btnChose filter" onClick ={() => filteredStyleBook('novel')}>Novels</button>
            <button className="btnChose filter" onClick ={() => filteredStyleBook('horror')}>Horrors</button>
            <button className="btnChose filter" onClick ={() => filteredStyleBook('poetry')}>Poems</button>
        </div>
    )
}

export default Buttons;