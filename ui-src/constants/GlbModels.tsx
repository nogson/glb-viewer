// thumb images
import TubThumb from "../assets/images/thumb_tub.png";
import BathChairThumb from "../assets/images/thumb_bathChair.png";
import BathThumb from "../assets/images/thumb_bath.png";
import LockerThumb from "../assets/images/thumb_locker.png";
import MirrorThumb from "../assets/images/thumb_mirror.png";
// models
import Locker from "../components/Locker";
import Tub from "../components/Tub";
import BathChair from "../components/BathChair";
import Bath from "../components/Bath";
import Mirror from "../components/Mirror";
import Shower from "../components/Shower";
import Shampoo from "../components/Shampoo";
import BodyShampoo from "../components/BodyShampoo";

const GlbModels = [
  { name: "tub", thumb: TubThumb, component: <Tub /> },
  { name: "bathChair", thumb: BathChairThumb, component: <BathChair /> },
  { name: "bath", thumb: BathThumb, component: <Bath /> },
  { name: "locker", thumb: LockerThumb, component: <Locker /> },
  { name: "mirror", thumb: MirrorThumb, component: <Mirror /> },
  { name: "shower", thumb: MirrorThumb, component: <Shower /> },
  { name: "shampoo", thumb: MirrorThumb, component: <Shampoo /> },
  { name: "bodyShampoo", thumb: MirrorThumb, component: <BodyShampoo /> },
];

export default GlbModels;
