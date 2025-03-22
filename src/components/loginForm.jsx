import { useState } from "react";

function Loginform() {

  const [usn, setUsn] = useState("");


  
function changeUsername(event){
    setUsn(event.target.value);
}
  
  return (
    <>
      
        <section className="container-fluid mt-4">
            <div className="row">
                <div className="col-5 m-auto">
                    <div className="card">
                        <div className="card-header text-center bg-dark tex-center text-white">
                            <h2>Comtrolled Element</h2>

                        </div>
                        <div className="card-body text-center">
                            <form>
                                <div>
                                    <input type="text" placeholder="Enter userName" className="form-control" value = {usn} onChange={changeUsername} />
                                </div>

                            </form>

                        </div>
                        <div className="card-footer text-center bg-dark text-center text-white">
                            <h2>UserNme Is:- <span>{usn}</span></h2>

                        </div>
                    </div>

                </div>
                
            </div>

        </section>
    </>
  );
}
export default Loginform;
