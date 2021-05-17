import {useState} from 'react';
import getWordFrequency from "../utils/frequency"
import DataTable from "./DataTable"

const UserInput = () => {

    const [n, setN] = useState(0)
    const [warning, setWarning] = useState("")
    const [data, setData] = useState([])
    const [showTable, setShowTable] = useState(false)


    async function handleOnClick(){
        if(n < 0 || n === 0 || n === ""){
            setWarning("Invalid input given")
        }
        else {
            setWarning("")
            var result = await getWordFrequency(n)
            setData(result)
            setShowTable(true)
        }
    }
       
    
    return ( <div>

        <section className="hero is-medium">
        <div className="hero-body">
            <div className="has-text-centered">

                <p className="is-size-4">Link : <a target="blank" href="https://raw.githubusercontent.com/invictustech/test/main/README.md">https://raw.githubusercontent.com/invictustech/test/main/README.md</a></p>
            </div>
                <br />
                <div className="field has-addons is-justify-content-center">
                <div className="control">
                    <input className="input" type="number" onChange={(e) => setN(e.target.value)} placeholder="Enter N value" />
                    <p className="has-text-danger">{ warning }</p>
                </div>
                <div className="control">
                    <a className="button is-info" href="#!" onClick={handleOnClick}>
                    Search for top {n < 0 || n === 0 || n === "" ? "N" : n}
                    </a>
                </div>
                </div>
        </div>
        </section>
        {showTable ? (<>
                <div className="has-text-centered">
                <span className="is-size-3">Results</span>
            </div>
            <br />
        <div className="container">
            <DataTable data={data} />
        </div> </>) : ""}
        

    </div>  );
}
 
export default UserInput;