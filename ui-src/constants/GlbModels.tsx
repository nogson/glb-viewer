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
import BucketThumb from "../assets/images/thumb_bucket.png";
import EntranceSignboardThumb from "../assets/images/thumb_entranceSignboard.png";

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
import Bucket from "../components/Bucket";
import EntranceSignboard from "../components/EntranceSignboard";

const GlbModels = [
  { name: "Tub", thumb: TubThumb },
  { name: "BathChair", thumb: BathChairThumb },
  { name: "Bath", thumb: BathThumb },
  { name: "Locker", thumb: LockerThumb },
  { name: "Chair", thumb: ChairThumb },
  { name: "Mirror", thumb: MirrorThumb },
  { name: "Shower", thumb: ShowerThumb },
  { name: "Shampoo", thumb: ShampooThumb },
  { name: "BodyShampoo", thumb: BodyShampooThumb },
  { name: "BodyScale", thumb: BodyScaleThumb },
  { name: "Bucket", thumb: BucketThumb },
  {
    name: "EntranceSignboard",
    thumb: EntranceSignboardThumb,
  },
];

export default GlbModels;
