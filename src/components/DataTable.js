const DataTable = ({data}) => {
    return ( <div className="container has-text-centered">
        <table className="table is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>
                        Word
                    </th>
                    <th>
                        Frequency
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,idx) => (
                        <tr key={idx}>
                            <td>{ item[0] }</td>
                            <td>{ item[1] }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div> );
}
 
export default DataTable;