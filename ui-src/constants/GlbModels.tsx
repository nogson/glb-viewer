// thumb images
import TubThumb from "../assets/images/thumb_tub.png";
import BathChairThumb from "../assets/images/thumb_bathChair.png";
import BathThumb from "../assets/images/thumb_bath.png";
import LockerThumb from "../assets/images/thumb_locker.png";
import MirrorThumb from "../assets/images/thumb_mirror.png";
import ShampooThumb from "../assets/images/thumb_shampoo.png";
import BodyShampooThumb from "../assets/images/thumb_bodyShampoo.png";
import ShowerThumb from "../assets/images/thumb_shower.png";
import BodyScaleThumb from "../assets/images/thumb_bodyScale.png";
import ChairThumb from "../assets/images/thumb_chair.png";

// models
import Locker from "../components/Locker";
import Tub from "../components/Tub";
import BathChair from "../components/BathChair";
import Bath from "../components/Bath";
import Mirror from "../components/Mirror";
import Shower from "../components/Shower";
import Shampoo from "../components/Shampoo";
import BodyShampoo from "../components/BodyShampoo";
import BodyScale from "../components/BodyScale";
import Chair from "../components/Chair";

const GlbModels = [
  { name: "tub", thumb: TubThumb, component: <Tub /> },
  { name: "bathChair", thumb: BathChairThumb, component: <BathChair /> },
  { name: "bath", thumb: BathThumb, component: <Bath /> },
  { name: "locker", thumb: LockerThumb, component: <Locker /> },
  { name: "Chair", thumb: ChairThumb, component: <Chair /> },
  { name: "mirror", thumb: MirrorThumb, component: <Mirror /> },
  { name: "shower", thumb: ShowerThumb, component: <Shower /> },
  { name: "shampoo", thumb: ShampooThumb, component: <Shampoo /> },
  { name: "bodyShampoo", thumb: BodyShampooThumb, component: <BodyShampoo /> },
  { name: "bodyScale", thumb: BodyScaleThumb, component: <BodyScale /> },
];

export default GlbModels;
