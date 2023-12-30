import './caro.css'
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carousel from "./Carousel";

function MainCarousel() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://ik.imagekit.io/11b646uhq/Horizon_23/TBA_1RI-mlrIY.png?updatedAt=1679476087933" timing=""/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://ik.imagekit.io/11b646uhq/Horizon_23/TBA_1RI-mlrIY.png?updatedAt=1679476087933" timing=""/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://ik.imagekit.io/11b646uhq/Horizon_23/TBA_1RI-mlrIY.png?updatedAt=1679476087933" timing=""/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://ik.imagekit.io/11b646uhq/Horizon_23/TBA_1RI-mlrIY.png?updatedAt=1679476087933" timing=""/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://ik.imagekit.io/11b646uhq/Horizon_23/TBA_1RI-mlrIY.png?updatedAt=1679476087933" timing=""/>
      )
    }
  ];
  return (
    <>
    <div className="caro-caro">
    <p className="text-center md:mb-14">
        <span className="heading heading1 font-Michroma">ENGA</span>
        <span className="heading heading2 font-Michroma">GEMENTS</span>
      </p>
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
    </>
  );
}

export default MainCarousel;
