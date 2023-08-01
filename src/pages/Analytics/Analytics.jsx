import join from './../../assets/images/icons/join.png'
import register from './../../assets/images/icons/register.png'
import active from './../../assets/images/icons/active.png'
import uninstall from './../../assets/images/icons/uninstall.png'
import RoundedChart from '../../components/RoundedChart';
export default function Analytics() {
 
  return (
    <> 
      <div className="row">
      <div className="col-12 pb-4">
          <h2 className=" fw-semibold">Analytics</h2>
          <p className=" fs-3 text-dark mt-n1 fw-normal">List of active users. </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">
                Active User
              </h5>
              <div className="">
               
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}
