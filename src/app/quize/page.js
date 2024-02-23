import AllQuize from "../components/allquize/allquize";


export default function Quize() {
    return (
        <main>
            <div className="container">
                <div className="quize-wrapper">
                    <div className='row'>
                        <div className='col-lg-12 m-auto'>
                          <AllQuize />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}