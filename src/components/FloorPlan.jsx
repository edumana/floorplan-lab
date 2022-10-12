import BedOne from "./FloorPlan/BedOne"
import BedThree from "./FloorPlan/BedThree"
import BedTwo from "./FloorPlan/BedTwo"
import Kitchen from "./FloorPlan/Kitchen"
import LivingRoom from "./FloorPlan/LivingRoom"
import BathOne from "./FloorPlan/BathOne"
import BathTwo from "./FloorPlan/BathTwo"

const FloorPlan = () => {

  const bedOne = 'One'
  const bedTwo = 'Two'
  const bedThree = 'Three'
  const full = 'Full'
  const half = 'Half'

  return (
    <div className="parent">

      <div className="div1">
        <div>
          <BathOne size = {full}/>
        </div>
        
        <div>
          <BathTwo size = {half}/>
        </div>
      </div>

      <div className="div2">
        <BedTwo bedSize={bedTwo}/>
      </div>

      <div className="div3">
        <BedThree bedSize={bedThree}/>
      </div>

      <div className="div4">
        <LivingRoom/>
      </div>

      <div className="div5">
        <Kitchen/>
      </div>

      <div className="div6">
        <BedOne bedSize={bedOne}/>
      </div>
      
    </div>
  );
}

export default FloorPlan;