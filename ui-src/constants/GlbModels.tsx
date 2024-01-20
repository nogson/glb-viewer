// thumb images
import HeartThumb from "../assets/images/thumb_heart.png";
import CowThumb from "../assets/images/thumb_cow.png";
import MotorcycleThumb from "../assets/images/thumb_Motorcycle.png";

// models
import Heart from "../components/Heart";
import Cow from "../components/Cow";
import Motorcycle from "../components/Motorcycle";
import Locker from "../components/Locker";
import Tub from "../components/Tub";

const GlbModels = [
  { name: "heart", thumb: HeartThumb, component: <Heart /> },
  { name: "cow", thumb: CowThumb, component: <Cow /> },
  { name: "motorcycle", thumb: MotorcycleThumb, component: <Motorcycle /> },
  { name: "locker", thumb: MotorcycleThumb, component: <Locker /> },
  { name: "tub", thumb: MotorcycleThumb, component: <Tub /> },
];

export default GlbModels;
